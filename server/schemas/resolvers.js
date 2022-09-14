import { User, Campsite } from "../models/index.js";
import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth.js";

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select("-__v -password")
					.populate("reservationHistory")
					.populate("campsiteListings")
					.populate("userReviews");
				return userData;
			}
			throw new AuthenticationError("Not logged in");
		},
		users: async () => {
			return User.find()
				.select("-__v -password")
				.populate("reservationHistory")
				.populate("campsiteListings")
				.populate("userReviews");
		},
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select("-__v -password")
				.populate("userReviews")
				.populate("campsiteListings");
		},
		campsites: async (parent, { location, name, _id }) => {
			const params = location
				? { location }
				: name
				? { name }
				: _id
				? { _id }
				: {};
			return Campsite.find(params).populate("campsiteReviews");
		},
	},
	Mutation: {
    //done
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
    //done
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);
			return { token, user };
		},
    //done -> future development = add profile picture
		editUser: async (parent, args, context) => {
			if (context.user) {
				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					args,
					{ new: true }
				)
					.populate("reservationHistory")
					.populate("campsiteListings")
					.populate("userReviews");
				return updatedUser;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
    //done --> future development: add images
		addCampsite: async (parent, args, context) => {
			if (context.user) {
				const campsite = await Campsite.create({
					...args,
					username: context.user.username,
				});
				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { campsiteListings: campsite._id } },
					{ new: true }
				).populate("campsiteReviews");
				return campsite;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
    //done --> future development= add images
		editCampsite: async (parent, args, context) => {
			if (context.user) {
				const updatedCampsite = await Campsite.findOneAndUpdate(
					{ _id: args._id },
					args,
					{ new: true }
				).populate("campsiteReviews");
				return updatedCampsite;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
    //done
		deleteCampsite: async (parent, { _id }, context) => {
			if (context.user) {
        await Campsite.findOneAndDelete({ _id: _id });
				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $pull: {campsiteListings: {_id} }},
					{ new: true }
				)
					.populate("reservationHistory")
					.populate("campsiteListings")
					.populate("userReviews");



				return updatedUser;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
	},
};

export default resolvers;

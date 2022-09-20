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
				.populate("userReviews");
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
		//adds user to database and returns a token alongside an object with all of the user info
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},

		//logs in and returns a token and the user info
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
		//edits user information and returns that updated info. Unavailable if user isn't logged int
		editUser: async (parent, args, context) => {
			if (context.user) {
				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					args,
					{ new: true, runValidators: true }
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

		//adds information about a campsite and adds it to the user's data if logged int
		addCampsite: async (parent, args, context) => {
			if (context.user) {
				const campsite = await Campsite.create({
					...args,
					username: context.user.username,
				});
				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { campsiteListings: campsite._id } },
					{ new: true, runValidators: true }
				).populate("campsiteReviews");
				return campsite;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
		//adds object of activities to the campsite collection
		addActivities: async (parent, { campsiteID, ...args }, context) => {
			if (context.user) {
				const updatedCampsite = await Campsite.findOneAndUpdate(
					{ _id: campsiteID },
					{ activities: { ...args } },
					{ new: true }
				).populate("campsiteReviews");
				return updatedCampsite;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
		// adds ammenities to a campsite only if user is logged in
		addAmenities: async (parent, { campsiteID, ...args }, context) => {
			if (context.user) {
				const updatedCampsite = await Campsite.findOneAndUpdate(
					{ _id: campsiteID },
					{ amenities: { ...args } },
					{ new: true }
				).populate("campsiteReviews");
				return updatedCampsite;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
		// adds terrain type to a campsite only if user is logged in. Can have multiple types of terrain
		addTerrain: async (parent, { campsiteID, ...args }, context) => {
			if (context.user) {
				const updatedCampsite = await Campsite.findOneAndUpdate(
					{ _id: campsiteID },
					{ terrain: { ...args } },
					{ new: true }
				).populate("campsiteReviews");
				return updatedCampsite;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
		//edits basic info about a campsite. Does not change terrain, amenities or activites. Use addTerrain, addAmenity or addActivity to update those values
		editCampsite: async (parent, args, context) => {
			if (context.user) {
				const updatedCampsite = await Campsite.findOneAndUpdate(
					{ _id: args._id },
					args,
					{ new: true, runValidators: true }
				).populate("campsiteReviews");
				return updatedCampsite;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
		//removes campsite from database and from the user's list
		deleteCampsite: async (parent, { _id }, context) => {
			if (context.user) {
				await Campsite.findOneAndDelete({ _id: _id });
				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $pull: { campsiteListings: { _id } } },
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

		//adds a reservation to the user's reservation history
		addReservation: async (parent, args, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $push: { reservationHistory: { ...args } } },
					{ new: true }
				).populate("campsite");
				return updatedUser;
			}
			throw new AuthenticationError(
				"You must be logged in to perform this action!"
			);
		},
		//deletes reservation from user's reservation history
		deleteReservation: async (parent, { _id }, context) => {
			if (context.user) {
				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $pull: { reservationHistory: { _id } } },
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
		//if logged in, adds a review to a user
		addUserReview: async (parent, { userID, rating, reviewText }, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: userID },
					{
						$push: {
							userReviews: {
								rating,
								reviewText,
								username: context.user.username,
							},
						},
					},
					{ new: true, runValidators: true }
				);
				return updatedUser;
			}
			throw new AuthenticationError("You need to be logged in to add a review");
		},
		//if logged in, adds a review to a campsite
		addCampsiteReview: async (
			parent,
			{ campsiteID, rating, reviewText },
			context
		) => {
			if (context.user) {
				const updatedCampsite = await Campsite.findOneAndUpdate(
					{ _id: campsiteID },
					{
						$push: {
							campsiteReviews: {
								rating,
								reviewText,
								username: context.user.username,
							},
						},
					},
					{ new: true, runValidators: true }
				);
				return updatedCampsite;
			}
			throw new AuthenticationError("You need to be logged in to add a review");
		},
	},
};

export default resolvers;

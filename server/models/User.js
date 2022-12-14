import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dateFormat from "../utils/dateFormat.js";
import reservationSchema from "./Reservation.js";
import reviewSchema from "./Review.js";

const { Schema, model } = mongoose;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
		phone: {
			type: String,
			required: false,
			match: [/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/, "Must match a phone number"]
		},
		bio: {
			type: String,
			default: ''
		},
		profilePicture: {
			type: String
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		reservationHistory: [reservationSchema],
		campsiteListings: [
			{
				type: Schema.Types.ObjectId,
				ref: "Campsite",
			},
		],
		userReviews: [reviewSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

userSchema.virtual("reviewCount").get(function () {
	return this.userReviews.length;
});

const User = model("User", userSchema);

export default User;

import mongoose from "mongoose";
import dateFormat from "../utils/dateFormat.js";

const { Schema, model } = mongoose;

const reviewSchema = new Schema(
	{
		reviewText: {
			type: String,
			required: true,
			minLength: 1,
			maxLength: 280,
		},
		rating: {
			type: Number,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
		user: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

const Review = model("Review", reviewSchema);

export default Review;

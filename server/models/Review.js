import mongoose from "mongoose";
import dateFormat from "../utils/dateFormat.js";

const { Schema } = mongoose;

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
		username: {
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

export default reviewSchema;

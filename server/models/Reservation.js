import mongoose from "mongoose";
import dateFormat from "../utils/dateFormat.js";

const { Schema } = mongoose;

const reservationSchema = new Schema(
	{
		totalPrice: {
			type: Number,
			required: true,
		},
		campsite: {
			type: Schema.Types.ObjectId,
			ref: "Campsite",
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
		reservationStartDate: {
			type: Date,
			get: (timestamp) => dateFormat(timestamp),
		},
		reservationEndDate: {
			type: Date,
			get: (timestamp) => dateFormat(timestamp),
		},
		numberOfCampers: {
			type: Number
		},
		active: {
			type: Boolean,
			default: true
		}
	},
	{
		toJSON: {
			getters: true,
		},
	}
);



export default reservationSchema;

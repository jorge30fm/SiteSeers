import mongoose from "mongoose";
import amenitiesSchema from "./Amenities.js";
import activitySchema from "./Activities.js";
import reviewSchema from "./Review.js";
import terrainSchema from "./Terrain.js";
const { Schema, model } = mongoose;

const campsiteSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		streetAddress: {
			type: String,
		},
		city: {
			type: String,
		},
		state: {
			type: String,
		},
		zipCode: {
			type: String,
		},
		amenities: amenitiesSchema,
		activities: activitySchema,
		terrain: terrainSchema,

		description: {
			type: String,
		},
		rules: {
			type: String,
		},
		checkInInfo: {
			type: String,
		},
		images: [
			{
				type: String,
			},
		],
		hostBio: {
			type: String,
		},
		phone: {
			type: String,
			match: [
				/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
				"Must match a phone number",
			],
		},
		email: {
			type: String,
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		active: {
			type: Boolean,
			default: false,
		},
		campsiteReviews: [reviewSchema],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

campsiteSchema.virtual("campsiteReviewCount").get(function () {
	return this.campsiteReviews.length;
});

const Campsite = model("Campsite", campsiteSchema);

export default Campsite;

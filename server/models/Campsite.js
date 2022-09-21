import mongoose from "mongoose";
import amenitiesSchema from "./Amenities.js";
import activitySchema from "./Activities.js";
import reviewSchema from "./Review.js";
import terrainSchema from "./Terrain.js"
const { Schema, model } = mongoose;

const campsiteSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		description: {
			type: String,
			required: true,
			minLength: 1,
			maxLength: 500,
		},
		price: {
			type: Number,
			required: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		amenities: amenitiesSchema,
		activities: activitySchema,
		terrain: terrainSchema,
		campsiteReviews: [ reviewSchema] ,
		active: {
			type: Boolean,
			default: true,
		},
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

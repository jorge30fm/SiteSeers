import mongoose from "mongoose";

const { Schema, model } = mongoose;

const campsiteSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		location: {
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
		ammenities: [],
		activities: [],
		terrain: {
			type: String,
		},
		campsiteReviews: {
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
		active: {
			type: Boolean,
			default: true
		}
	},
	{
        toJSON: {
            virtuals: true
        }
    }
);

campsiteSchema.virtual('campsiteReviewCount').get(function() {
    return this.campsiteReviews.length;
});

const Campsite = model('Campsite', campsiteSchema);

export default Campsite;

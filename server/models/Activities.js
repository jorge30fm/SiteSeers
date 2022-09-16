import mongoose from "mongoose";

const { Schema } = mongoose;

const activitySchema = new Schema({
	fishing: { type: Boolean, default: false },
	paddling: { type: Boolean, default: false },
	birdWatching: { type: Boolean, default: false },
	wildlifeWatching: { type: Boolean, default: false },
	biking: { type: Boolean, default: false },
	boating: { type: Boolean, default: false },
	offRoading: { type: Boolean, default: false },
	climbing: { type: Boolean, default: false },
	snowSports: { type: Boolean, default: false },
	horsebackRiding: { type: Boolean, default: false },
	surfing: { type: Boolean, default: false },
	windSport: { type: Boolean, default: false },
});
export default activitySchema;

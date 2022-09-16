import mongoose from "mongoose";

const { Schema } = mongoose;

const amenitiesSchema = new Schema({
	parking: { type: Boolean, default: false },
	wheelchairAccessible: { type: Boolean, default: false },
	petAllowed: { type: Boolean, default: false },
	toilets: { type: Boolean, default: false },
	campfire: { type: Boolean, default: false },
	water: { type: Boolean, default: false },
	showers: { type: Boolean, default: false },
	trash: { type: Boolean, default: false },
	hotTub: { type: Boolean, default: false },
	picnicTable: { type: Boolean, default: false },
	wifi: { type: Boolean, default: false },
	cookingEquipment: { type: Boolean, default: false },
});
export default amenitiesSchema;

import mongoose from "mongoose";

const { Schema } = mongoose;

const terrainSchema = new Schema({
    lake: { type: Boolean, default: false },
    beach: {type: Boolean, default: false},
    farm: {type: Boolean, default: false},
    forest: {type: Boolean, default: false},
    river: {type: Boolean, default: false},
    hotSpring: {type: Boolean, default: false},
    swimmingHole: {type: Boolean, default: false},
    desert: {type: Boolean, default: false},
    cave: {type: Boolean, default: false},
});
export default terrainSchema;
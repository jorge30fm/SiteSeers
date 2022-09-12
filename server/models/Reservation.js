import mongoose from "mongoose";
import dateFormat from "../utils/dateFormat.js";
const { Schema, model } = mongoose;

const reservationSchema = new Schema({
	totalPrice: {
		type: Number,
		required: true,
	},
	campsite: {
		type: Schema.Types.ObjectId,
		ref: "Campsite",
	},
	reservationDate: {
		type: Date,
		get: (timestamp) => dateFormat(timestamp),
	},
});

const Reservation = model("Reservation", reservationSchema);

export default Reservation;


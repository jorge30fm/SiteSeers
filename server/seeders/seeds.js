import userSeeds from "./userSeed.json" ;
import campsiteSeeds from "./campsiteSeed.json";

import db from "../config/connection.js";
import { User, Campsite } from "../models/index.js";
import mongoose from 'mongoose';

db.once("open", async () => {
	try {
		await Campsite.deleteMany({});
		await User.deleteMany({});

		await User.create(userSeeds);

		for (let i = 0; i < campsiteSeeds.length; i++) {
			const { _id, CampsiteOwner } = await Campsite.create(campsiteSeeds[i]);
			const user = await User.findOneAndUpdate(
				{ owner: CampsiteOwner },
				{
					$addToSet: {
						campsiteListings: _id,
					},
				}
			);
		}
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("all done!");
	process.exit(0);
});

// const faker = require('faker');
import sites from "./sites.js";
import db from "../config/connection.js";
import { User, Campsite } from "../models/index.js";

db.once("open", async () => {
  try {
    await Campsite.deleteMany({});
    await Campsite.create(sites);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});

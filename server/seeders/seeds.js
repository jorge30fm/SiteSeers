// const faker = require('faker');
import users from './users.js';
import sites from './sites.js';
import db from '../config/connection.js';
import { User, Campsite } from '../models/index.js';

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Campsite.deleteMany({});


    await User.create(users);
    await Campsite.create(sites);

    // for (let i = 0; i < thoughtSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

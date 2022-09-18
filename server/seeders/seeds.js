// const faker = require('faker');
import users from './users.js'
<<<<<<< HEAD
import sites from './campsites.js'
=======
import sites from './sites.js'
>>>>>>> 4223281 (changed spelling of ammenities to amenities in Campsite.js, added new sites.js file that includes amenities array)
import db from '../config/connection.js';
import { User, Campsite } from '../models/index.js';

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Campsite.deleteMany({});


    await User.create(users);
    await Campsite.create(sites);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

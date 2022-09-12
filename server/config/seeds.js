import { User } from "../models/index.js";

const userData = [
  {
    firstName: "Jorge",
    lastName: "Monteagudo",
    email: "jorge@email.com",
    password: "password123",
    phone: "123-456-7890",
    bio: "an absolute wizard",
    reservationHistory: [],
    campsiteListings: [],
    userReviews: []
  },

  {
    firstName: "Chip",
    lastName: "Hill",
    email: "chip@email.com",
    password: "password123",
    phone: "123-456-7890",
    bio: "an absolute wizard",
    reservationHistory: [],
    campsiteListings: [],
    userReviews: []
  },

  {
    firstName: "Josie",
    lastName: "Franklin",
    email: "josie@email.com",
    password: "password123",
    phone: "123-456-7890",
    bio: "an absolute wizard",
    reservationHistory: [],
    campsiteListings: [],
    userReviews: []
  },

  {
    firstName: "Jack",
    lastName: "Nowaczewski",
    email: "jack@email.com",
    password: "password123",
    phone: "123-456-7890",
    bio: "an absolute wizard",
    reservationHistory: [],
    campsiteListings: [],
    userReviews: []
  },

  {
    firstName: "Andrew",
    lastName: "Towers",
    email: "jorge@email.com",
    password: "password123",
    phone: "123-456-7890",
    bio: "he no wizard",
    reservationHistory: [],
    campsiteListings: [],
    userReviews: []
  },
];

const seedUsers = () => User.bulkCreate(userData);

export default seedUsers;

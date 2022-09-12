const { User } = require("../models");

const userData = [
  {
    firstName: "Jorge",
    lastName: "Monteagudo",
    email: "jorge@email.com",
    password: "password123",
    phoneNumber: "123-456-7890",
    about: "an absolute wizard",
  },

  {
    firstName: "Chip",
    lastName: "Hill",
    email: "chip@email.com",
    password: "password123",
    phoneNumber: "123-456-7890",
    about: "an absolute wizard",
  },

  {
    firstName: "Josie",
    lastName: "Franklin",
    email: "josie@email.com",
    password: "password123",
    phoneNumber: "123-456-7890",
    about: "an absolute wizard",
  },

  {
    firstName: "Jack",
    lastName: "Nowaczewski",
    email: "jack@email.com",
    password: "password123",
    phoneNumber: "123-456-7890",
    about: "an absolute wizard",
  },

  {
    firstName: "Andrew",
    lastName: "Towers",
    email: "jorge@email.com",
    password: "password123",
    phoneNumber: "123-456-7890",
    about: "he no wizard",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

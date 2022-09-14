import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    phone: {
      type: String,
      required: false,
      // match: [/ ^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, "Must match a phone number!"]
    },
    bio: {
      type: String,
      required: false,
      minlength: 1,
      maxLength: 280,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    reservationHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reservation",
      },
    ],
    campsiteListings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Campsite",
      },
    ],
    userReviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("reviewCount").get(function () {
  return this.userReviews.length;
});

const User = model("User", userSchema);

export default User;

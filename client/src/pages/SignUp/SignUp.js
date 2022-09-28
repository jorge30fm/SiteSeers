import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations.js";

import Auth from "../../utils/auth.js";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="mountain-bg">
      <section className="padding flex-row justify-center">
        <h2 className="col-12 text-center">Sign Up</h2>
        <form className="flex-column" onSubmit={handleFormSubmit}>
          <div>
            {" "}
            {/* TODO: display fname and lname in a row */}
            <div className="flex-row margin-top">
              <label className="col-12">First Name:</label>
              <input
                className="form-input col-12"
                placeholder="Your First Name"
                name="firstName"
                type="firstName"
                id="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-row margin-top">
              <label className="col-12">Last Name:</label>
              <input
                className="form-input col-12"
                placeholder="Your Last Name"
                name="lastName"
                type="lastName"
                id="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex-row margin-top">
            <label className="col-12">Username:</label>
            <input
              className="form-input col-12"
              placeholder="Your Username"
              name="username"
              type="username"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex-row margin-top">
            <label className="col-12">Email:</label>
            <input
              className="form-input col-12"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex-row margin-top">
            <label className="col-12">Password:</label>
            <input
              className="form-input col-12"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex-row margin-top justify-center">
            <input className="checkbox" name="age" type="checkbox"></input>
            <label htmlFor="age">
              I agree to SiteSeers <Link to="/terms-of-service">Terms</Link> and{" "}
              <Link to="/privacy-policy">Privacy</Link>.
            </label>
          </div>
          <div className="btn-container margin-top">
            <div>
              <button className="btn btn-long" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        {error && (
          <div className="margin-top flex-column align-center">
            Signup failed.
          </div>
        )}
      </section>
    </main>
  );
};

export default Signup;

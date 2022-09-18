import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

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
    <main>
      <section className="signup-section">
        <div className="signup-div">
          <form className="flex-column" onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your Username"
              name="username"
              type="username"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your First Name"
              name="firstName"
              type="firstName"
              id="firstName"
              value={formState.firstName}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your Last Name"
              name="lastName"
              type="lastName"
              id="lastName"
              value={formState.lastName}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
            <div className="age-container">
              <input className="checkbox" name="age" type="checkbox"></input>
              <label for="age">
                I agree to SiteSeers <a href="/terms-of-service">Terms</a>{" "}
                and <a href="/privacy-policy">Privacy</a>.
              </label>
            </div>
            <div className="btn-container">
              <button className="btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          {error && <div>Signup failed</div>}
        </div>
      </section>
    </main>
  );
};

export default Signup;

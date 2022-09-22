import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main>
      <section className="mountain-bg padding">
        <h2>Login</h2>
        <form className="flex-column" onSubmit={handleFormSubmit}>
          <div className="flex-column margin-top">
            <label>Email:</label>
            <input
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex-column margin-top">
            <label>Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="btn-container margin-top">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="flex-column align-center margin-top">
          {error && <div>Email or password incorrect.</div>}
        </div>
      </section>
      <section className="padding flex-column align-center">
        <h3>Not a user yet? No worries!</h3>
        <div className="btn-container">
          <Link to="/signup">
            <button className="btn">Sign Up</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;

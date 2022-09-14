import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <main>
      <section className="signup-section">
        <form className="flex-column">
          <div className="signup-div">
            <label for="first">First Name:</label>
            <input name="first"></input>
          </div>
          <div className="signup-div">
            <label for="last">Last Name:</label>
            <input name="last"></input>
          </div>
          <div className="signup-div">
            <label for="username">Username:</label>
            <input name="username"></input>
          </div>
          <div className="signup-div">
            <label for="email">Email:</label>
            <input name="email" type="email"></input>
          </div>
          <div className="signup-div">
            <label for="password">Password:</label>
            <input name="password" type="password"></input>
          </div>
          <div className="age-container">
            <input className="checkbox" name="age" type="checkbox"></input>
            <label for="age">I am at least 18 years of age.</label>
          </div>
          <div className="btn-container">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;

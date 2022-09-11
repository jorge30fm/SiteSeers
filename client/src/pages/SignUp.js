import React from "react";

const SignUp = () => {
  return (
    <div>
      <form>
        <label for="first">First Name:</label>
        <input name="first"></input>
        <label for="last">Last Name:</label>
        <input name="last"></input>
        <label for="username">Username:</label>
        <input name="username"></input>
        <label for="email">Email:</label>
        <input name="email" type="email"></input>
        <label for="password">Password:</label>
        <input name="password" type="password"></input>
        <input name="age" type="checkbox"></input>
        <label for="age">I am at least 18 years of age.</label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

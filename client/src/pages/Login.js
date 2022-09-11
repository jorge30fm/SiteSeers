import React from "react";

const Login = () => {
  return (
    <div>
      <section>
        <form>
          <label>Email:</label>
          <input name="email" type="email"></input>
          <label>Password:</label>
          <input name="password" type="password"></input>
          <button type="submit">Login</button>
        </form>
      </section>
      <section>
        <p>Not a user yet? No worries!</p>
        <button>Sign Up</button>
      </section>
    </div>
  );
};

export default Login;

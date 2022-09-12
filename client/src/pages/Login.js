import React from "react";

const Login = () => {
  return (
    <main>
      <section className="mountain-bg">
        <h2>Login</h2>
        <form>
            <label>Email:</label>
            <input name="email" type="email"></input>
            <label>Password:</label>
            <input name="password" type="password"></input>
          <div className="btn-container">
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
      <section className="centered">
        <h3>Not a user yet? No worries!</h3>
        <button>Sign Up</button>
      </section>
    </main>
  );
};

export default Login;

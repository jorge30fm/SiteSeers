import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
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
      <section className="mountain-bg login-section">
        <h2>Login</h2>
          <form className="flex-column" onSubmit={handleFormSubmit}>
          <div className="login-div">
          <label>Email:</label>
            <input
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            </div>
            <div className="login-div">
            <label>Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            </div>
             <div className="login-div">
            <div className="btn-container">
              <button className="btn" type="submit">
                Login
              </button>
            </div>
          </div>
          </form>
          {error && <div>Login failed</div>}
      </section>
      <section className="login-section flex-column align-center">
        <h3>Not a user yet? No worries!</h3>
        <div className="btn-container">
          <button className="btn">Sign Up</button>
        </div>
      </section>
    </main>
  );
};

export default Login;

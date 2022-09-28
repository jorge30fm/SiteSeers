import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations.js";

import Auth from "../../utils/auth.js";

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
		<main className="mountain-bg">
			<section className="padding flex-column justify-center">
				<h2 className="col-12 text-center">Login</h2>
				<form
					className="flex-row justify-center col-12"
					onSubmit={handleFormSubmit}
				>
					<div className="flex-row margin-top justify-center col-12">
						<div className="col-8 col-xl-3 col-lg-4 col-md-5 col-sm-6 flex-row">
							<label className="col-12">Email:</label>
							<input
								placeholder="Email"
								name="email"
								type="email"
								value={formState.email}
								onChange={handleChange}
                className='col-12'
							/>
						</div>
					</div>
					<div className="flex-row justify-center margin-top col-12 ">
          <div className="col-8 col-xl-3 col-lg-4 col-md-5 col-sm-6 flex-row">
            <label className="col-12">Password:</label>
						<input
							placeholder="Password"
							name="password"
							type="password"
							value={formState.password}
							onChange={handleChange}
							className="col-12"
						/>
            </div>
					</div>
					<div className="btn-container margin-top">
						<div>
							<button className="btn btn-long" type="submit">
								Login
							</button>
						</div>
					</div>
				</form>
				<div className="flex-column align-center margin-top">
					{error && <div>Email or password incorrect.</div>}
				</div>
			</section>
			<section className="padding flex-column align-center">
				<h3>Not a user yet? No worries!</h3>
				<div className="btn-container margin-top">
					<Link to="/signup">
						<button className="btn btn-long">Sign Up</button>
					</Link>
				</div>
			</section>
		</main>
	);
};

export default Login;

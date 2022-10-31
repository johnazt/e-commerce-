import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

const Login = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const submit = data => {
		axios
			.post(
				"https://e-commerce-api.academlo.tech/api/v1/users/login",
				data
			)
			.then(res => {
				localStorage.setItem("token", res.data.data.token);
				navigate("/");
			})
			.catch(error => {
				if (error.response.status === 404) {
					alert("Credenciales Invalidas");
				}
			});
	};
	return (
		<div>
			{!localStorage.getItem("token", "") ? (
				<div className="log-in">
					<p className="login-title">
						Welcome! Enter your email and password to continue
					</p>
					<div className="test-data">
						<h5>Test Data</h5>
						<div className="test-data-email">
							<EmailIcon /> janz@gmail.com
						</div>
						<div className="test-data-password">
							<KeyIcon /> janz123
						</div>
					</div>
					<Form onSubmit={handleSubmit(submit)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								{...register("email")}
								type="email"
								placeholder="Enter email"
							/>
						</Form.Group>

						<Form.Group className="mb-5" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								{...register("password")}
								type="password"
								placeholder="Password"
							/>
						</Form.Group>
						<Button variant="primary" type="submit" style={{ width: "100%" }}>
							Log In
						</Button>
					</Form>
				</div>
			) : (
				<div className="d-flex justify-content-center log-out">
					<Button
						onClick={() => {
							localStorage.setItem("token", "");
							navigate("/");
						}}
					>
						Log Out
					</Button>
				</div>
			)}
		</div>
	);
};

export default Login;

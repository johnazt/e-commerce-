import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
	return (
		<footer
			className="footer-bg"
			style={{ padding: "3em", textAlign: "center" }}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "3em",
				}}
			>
				<a href="#" target="_blank">
					<InstagramIcon fontSize="large" className="nav-link-color" />
				</a>
				<a href="https://github.com/johnazt" target="_blank">
					<GitHubIcon fontSize="large" className="nav-link-color" />
				</a>
				<a href="https://www.linkedin.com/in/johnasto/" target="_blank">
					<LinkedInIcon fontSize="large" className="nav-link-color" />
				</a>
			</div>
			<small
				style={{
					paddingTop: "2em",
					display: "block",
					color: "#fff",
					fontSize: "1em",
				}}
			>
				Made by John Asto
			</small>
		</footer>
	);
};

export default Footer;

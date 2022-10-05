import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
	return (
		<footer
			style={{ backgroundColor: "#ccc", padding: "3em", textAlign: "center" }}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "3em",
				}}
			>
				<InstagramIcon fontSize="large" />
				<LinkedInIcon fontSize="large" />
				<GitHubIcon fontSize="large" />
			</div>
			<small style={{ paddingTop: "2em", display: "block" }}>
				Made by John Asto
			</small>
		</footer>
	);
};

export default Footer;

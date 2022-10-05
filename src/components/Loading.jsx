import React from "react";
import "../styles/loading.css";

const Loading = () => {
	return (
		<div className="loader" >
			<div className="lds-facebook">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;

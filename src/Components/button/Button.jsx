import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

function Button(props) {
	return (
		<NavLink
			className="fw-bold border-0 btn btn-success"
			to={props.to}
			exact="true"
		>
			{props.text}
		</NavLink>
	);
}

export default Button;

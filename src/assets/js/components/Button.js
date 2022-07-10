import React from "react";

export default function Button({classList, text}) {

	return (
		<button className={classList.join(" ")}>{text}</button>
	)
}
import React, {useState} from "react";
import {connect} from "react-redux"
import {themeToggle} from "../stores/actions"

import Button from "./Button"

function Header(props) {

	function buttonHandler() {

		document.body.classList.toggle("dark");
	}

	return (
		<div className="todo__head">
			<div className="todo__title">
				<h1>TODO</h1>
			</div>
			<Button classList={["todo__theme-btn"]} text={props.icon} onClick={() => {props.onThemeToggle(); buttonHandler()}}/>
		</div>
	)
}

function mapStateToProps(state) {
	const {themeReducer} = state
	return {
		icon: themeReducer.icon
	}
}

function mapDispatchToProps(dispatch) {

	return {
		onThemeToggle: () => dispatch(themeToggle())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
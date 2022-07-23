import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {inputText} from "../stores/actions";

export default function Create({createTodo, onCheck, checked}) {

	const dispatch = useDispatch();
	const val = useSelector(state => {
		const { createItemReducer } = state;

		return createItemReducer.text;
	});

	function onKeyPress() {

		dispatch(inputText(""));
	}

	function onHandler(e) {

		dispatch(inputText(e.target.value));
	}

	return (
		<form className="todo__create-form" onSubmit={(e) => {createTodo(e, val); onKeyPress()}}>
			<label className="todo__create-container">
				<input type="checkbox" className="todo__check" checked={checked} onChange={onCheck}/>
				<div className="todo__false-check">
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
				</div>
				<input type="text" className="todo__input" placeholder="Create a new todo..." value={val} onChange={(e) => {onHandler(e)}} />
			</label>
		</form>
	)
}

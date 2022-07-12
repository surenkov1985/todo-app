import React, {useState} from "react";

export default function Create({createTodo, onCheck, checked}) {

	const [val, setVal] = useState("");


	function onKeyPress(e) {

		if (e.key === "Enter") {

			setVal("");
		}
	}

	function onHandler(e) {

		setVal(e.target.value);
	}

	return (
		<label className="todo__create-container">
			<input type="checkbox" className="todo__check" checked={checked} onChange={onCheck}/>
			<div className="todo__false-check">
				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
			</div>
			<input type="text" className="todo__input" placeholder="Create a new todo..." value={val} onChange={(e) => {onHandler(e)}} onKeyPress={e => {createTodo(e, val); onKeyPress(e)}}/>
		</label>
	)
}
import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {reorderItem, setOrderItem, setReorderItem} from "../stores/actions"
import Button from "./Button"
import classNames from "classnames"

export default function TodoList({deleteItem, classList, onCheck, category}) {

	let data = useSelector(state => {
		const {createItemReducer} = state;

		return createItemReducer.data
	});
	const [todoList, setTodoList] = useState(data);

	let reorderList = useSelector(state => {

		const {createItemReducer} = state;

		return createItemReducer.reorderItem
	});

	let orderList = useSelector(state => {

		const {createItemReducer} = state;

		return createItemReducer.orderItem
	});

	const dispatch = useDispatch();

	useEffect(() => {setTodoList(data.filter((item) => {

		if (category === "all") {

			return item
		} else if (category === "completed") {

			return item.completed === "active"
		} else if (category === "active") {

			return !item.completed.length
		}

	}))}, [category, data]);

	function dragStartHandler(item) {

		dispatch(setReorderItem(item));
	}

	function dragOverHandler(e) {
		e.preventDefault();
	}

	function dropHandler(e,item) {
		e.preventDefault();

		dispatch(setOrderItem(item));
		dispatch(reorderItem(orderList, reorderList));
	}

	return (
		<ul className="todo__list">
			{todoList.map((item) => {

				return (
					<li
						className={classNames(classList, item.completed)}
						key={item.id}
						onDragStart={() => {dragStartHandler(item)}}
						onDragOver={(e) => {dragOverHandler(e)}}
						onDrop={(e) => {dropHandler(e, item)}}
						draggable>
						<label className="todo__create-container">
							<input type="checkbox" className="todo__check" defaultChecked={item.checked} onClick={(e) => onCheck(e, item.id)}/>
							<div className="todo__false-check">
							<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
							</div>
							<div className="todo__text">{item.text}</div>
							<Button classList={["todo__delete-btn"]} text={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>} onClick={e => deleteItem(item.id, todoList)}/>
						</label>
					</li>
				)

			})}
		</ul>
	)
}
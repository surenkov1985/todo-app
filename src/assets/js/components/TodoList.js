import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {reorderItem, setOrderItem, setReorderItem, setDeletedItem, deletedItem} from "../stores/actions"
import Button from "./Button"
import classNames from "classnames"

export default function TodoList({deleteItem, classList, onCheck, category}) {

	let data = useSelector(state => {
		const {createItemReducer} = state;

		return createItemReducer.data
	});
	const [classes, setClass] = useState(classList);
	const [todoList, setTodoList] = useState([]);

	let reorderList = useSelector(state => {

		const {createItemReducer} = state;

		return createItemReducer.reorderItem
	});

	let orderList = useSelector(state => {

		const {createItemReducer} = state;

		return createItemReducer.orderItem
	});

	const dispatch = useDispatch();

	useEffect(() => {setClass(classList)}, [classList])
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

	function dragEndHandler() {
	}

	function dragOverHandler(e) {
		e.preventDefault();
	}

	function dropHandler(e,item) {
		e.preventDefault();

		dispatch(setOrderItem(item));
		dispatch(reorderItem(orderList, reorderList));
	}

	function sortTodoList(a, b) {

		if (a.order > b.order) {

			return 1;
		} else {

			return -1;
		}
	}
	function deleteItem(key) {


		// dispatch(setDeletedItem(key));
		dispatch(deletedItem(todoList, key))

		// delete data[key];
		//
		// setData(data.filter((item) => {
		//
		// 	return item.id !== key;
		// }))
	}

	return (
		<ul className="todo__list">
			{todoList.sort(sortTodoList).map((item) => {

				return (
					<li
						className={classNames(classes, item.completed)}
						key={item.id}
						onDragStart={() => {dragStartHandler(item)}}
						onDragLeave={dragEndHandler}
						onDragEnd={dragEndHandler}
						onDragOver={(e) => {dragOverHandler(e)}}
						onDrop={(e) => {dropHandler(e, item)}}
						draggable>
						<label className="todo__create-container">
							<input type="checkbox" className="todo__check"  onClick={(e) => onCheck(e, item.text)}/>
							<div className="todo__false-check">
							<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
							</div>
							<div className="todo__text">{item.text}</div>
							<Button classList={["todo__delete-btn"]} text={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>} onClick={e => deleteItem(item.id)}/>
						</label>
					</li>
				)
			})}
		</ul>
	)
}
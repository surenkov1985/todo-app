import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toggleClass, createItem, clearActiveItems, deletedItem, setDeletedItem} from "../stores/actions"

import Button from "./Button";
import Header from "./Header";
import Create from "./Create";
import TodoList from "./TodoList";

export default function App() {

	const dispatch = useDispatch();

	let data = useSelector(state => {
		const {createItemReducer} = state;

		return createItemReducer.data
	});
	let itemClass = ["todo__item"];
	const [itemClasses, setItemClasses] = useState();
	const [category, setCategory] = useState("all");
	const [checked, setChecked] = useState(false);
	const [numbItems, setNumbItems] = useState(data.length);

	let active = useSelector(state => {
		const { createItemReducer } = state;

		return createItemReducer.className;
	});

	function createTodo(e, val) {

		if (e.key === "Enter") {

			if (val.length) {

				dispatch(createItem(active, val));
				setChecked(false);
			}
		}
	}

	function deleteItem(key) {


		dispatch(setDeletedItem(key));
		dispatch(deletedItem(data))

		// delete data[key];
		//
		// setData(data.filter((item) => {
		//
		// 	return item.id !== key;
		// }))
	}

	function onCheck() {

		setChecked(!checked);

		dispatch(toggleClass(""))
	}
	function onItemCheck(e, val) {

		data.map((item) => {

			if (item.text === val && e.target.checked) {

				item.completed = "active";


			} else if (item.text === val && !e.target.checked) {

				item.completed = "";
			}

			setItemClasses([...itemClass, item.completed]);
		});
	}

	function setDataCompleted() {

		setCategory("completed");

		let counter = 0;

		data.map((item) => {

			if (item.completed === "active") counter++
		});

		setNumbItems(counter);

	}

	function setDataActive() {

		setCategory("active");

		let counter = 0;

		data.map((item) => {

			if (!item.completed.length) counter++
		});

		setNumbItems(counter);
	}

	function setDataAll() {

		setCategory("all");

		setNumbItems(data.length);
	}

	function clearCompletedItems() {

		dispatch(clearActiveItems(data))
	}
	return (
		<div className="container">
			<div className="background">
				<div className="background__img">
				</div>
			</div>
			<div className="container__todo todo">
				<div className="todo__block">
					<Header/>
					<div className="todo__main">
						<div className="todo__create">
							<Create createTodo={createTodo} onCheck={onCheck} checked={checked}/>
						</div>

						<div className="todo__content">
							<TodoList classList="todo__item" data={data} category={category} onCheck={onItemCheck}/>
							<div className="todo__control">
								<div className="todo__numb">{numbItems} items left</div>
								<div className="todo__sort">
									<Button classList={["todo__sort-all", "btn", "active"]} text="All" onClick={setDataAll}/>
									<Button classList={["todo__sort-active", "btn"]} text="Active" onClick={setDataActive}/>
									<Button classList={["todo__sort-completed", "btn"]} text="Completed" onClick={setDataCompleted}/>
								</div>
								<div className="todo__clear">
									<Button classList={["todo__clear-btn", "btn"]} text="Clear completed" onClick={clearCompletedItems}/>
								</div>
							</div>
						</div>
					</div>

					<div className="todo__foot">Drag and drop to reorder list</div>
				</div>
			</div>
		</div>
	)
}


// deleteItem={deleteItem}
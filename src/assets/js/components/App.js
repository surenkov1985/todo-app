import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toggleClass, toggleItemClass, createItem, clearActiveItems, deletedItem, setDeletedItem, setNumbItems} from "../stores/actions"

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

	let numbItems = useSelector(state => {
		const {createItemReducer} = state;

		return createItemReducer.numbItems
	});

	const [category, setCategory] = useState("all");
	const [onAllCategory, setOnAllCategory] = useState("active");
	const [onCompletedCategory, setOnCompletedCategory] = useState("");
	const [onActiveCategory, setOnActiveCategory] = useState("all");
	const [checked, setChecked] = useState(false);

	let active = useSelector(state => {
		const { createItemReducer } = state;

		return createItemReducer.className;
	});

	function createTodo(e, val) {
		e.preventDefault();

		console.log(e)
		if (val.length) {

			dispatch(createItem(active, val));
			setChecked(false);
			dispatch(setNumbItems());
		}
	}

	function onCheck() {

		setChecked(!checked);
		dispatch(toggleClass(checked))
	}

	function onItemCheck(e, id) {

		dispatch(toggleItemClass(e, id))
	}

	function setDataCompleted() {

		setCategory("completed");
		setOnAllCategory("");
		setOnActiveCategory("");
		setOnCompletedCategory("active");
		let counter = 0;

		data.map((item) => {

			if (item.completed === "active") counter++
		});

		dispatch(setNumbItems(counter));
	}

	function setDataActive() {

		setCategory("active");
		setOnAllCategory("");
		setOnActiveCategory("active");
		setOnCompletedCategory("");
		let counter = 0;

		data.map((item) => {

			if (!item.completed.length) counter++
		});

		dispatch(setNumbItems(counter));
	}

	function setDataAll() {

		setCategory("all");
		setOnAllCategory("active");
		setOnActiveCategory("");
		setOnCompletedCategory("");
		dispatch(setNumbItems(data.length));
	}

	function deleteItem(key, arr) {

		dispatch(setDeletedItem(key));
		dispatch(deletedItem(arr, key));
		dispatch(setNumbItems());
	}

	function clearCompletedItems() {

		dispatch(clearActiveItems(data));
		dispatch(setNumbItems());
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
							<TodoList classList="todo__item" data={data} category={category} onCheck={onItemCheck} deleteItem={deleteItem}/>
							<div className="todo__control">
								<div className="todo__numb">{numbItems} items left</div>
								<div className="todo__sort">
									<Button classList={["todo__sort-all", "btn", onAllCategory]} text="All" onClick={setDataAll}/>
									<Button classList={["todo__sort-active", "btn", onActiveCategory]} text="Active" onClick={setDataActive}/>
									<Button classList={["todo__sort-completed", "btn", onCompletedCategory]} text="Completed" onClick={setDataCompleted}/>
								</div>
								<div className="todo__clear">
									<Button classList={["todo__clear-btn", "btn"]} text="Clear completed" onClick={clearCompletedItems}/>
								</div>
							</div>
						</div>
						<div className="todo__control-false">
							<div className="todo__sort-false">
								<Button classList={["todo__sort-all", "btn", onAllCategory]} text="All" onClick={setDataAll}/>
								<Button classList={["todo__sort-active", "btn", onActiveCategory]} text="Active" onClick={setDataActive}/>
								<Button classList={["todo__sort-completed", "btn", onCompletedCategory]} text="Completed" onClick={setDataCompleted}/>
							</div>
						</div>
					</div>

					<div className="todo__foot">Drag and drop to reorder list</div>
				</div>
			</div>
		</div>
	)
}

import React, {useState, useEffect} from "react";
import Button from "./Button";
import Header from "./Header";
import Create from "./Create";
import TodoList from "./TodoList";

export default function App() {

	const todos = [
		{id: "t1", completed: "", order: 1, text: "Complete online JavaScript course"},
		{id: "t2", completed: "", order: 2,  text: "Jog around the park 3x"},
		{id: "t3", completed: "", order: 3,  text: "10 minutes meditation"},
		{id: "t4", completed: "", order: 4,  text: "Read for 1 hour"},
		{id: "t5", completed: "", order: 5,  text: "Pick up groceries"},
		{id: "t6", completed: "", order: 6,  text: "Complete Todo App on Frontend Mentor"}
	];
	let itemClass = ["todo__item"];
	const [data, setData] = useState(todos);
	const [active, setActive] = useState("");
	const [itemClasses, setItemClasses] = useState();
	const [category, setCategory] = useState("all");
	const [checked, setChecked] = useState(false);
	const [itemId, setItemId] = useState(`t${data.length + 1}`);
	const [itemOrder, setItemOrder] = useState(data.length + 1)
	const [numbItems, setNumbItems] = useState(data.length);

	useEffect(() => {setItemId(`t${data.length + 1}`); setNumbItems(data.length); setItemOrder(data.length + 1)}, [data]);

	function createTodo(e, val) {

		if (e.key === "Enter") {

			if (val.length && checked) {

				setData([...data, {id: itemId,completed: "active", order: itemOrder,  text: val}]);
				setChecked(false);
			} else if (val.length && !checked) {

				setData([...data, {id: itemId, completed: "", text: val}])
			}
		}
	}

	function deleteItem(key) {

		delete data[key];

		setData(data.filter((item) => {

			return item.id !== key;
		}))
	}

	function onCheck() {

		setChecked(!checked);
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


		setData(data.filter((item) => {

			return !item.completed.length
		}))
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
							<TodoList classList={itemClass} data={data} category={category} deleteItem={deleteItem} onCheck={onItemCheck}/>
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
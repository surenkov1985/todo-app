import React from "react";
import Button from "./Button";
import Header from "./Header";
import Create from "./Create";
import TodoItem from "./TodoItem"

export default function App() {

	const todos = ["Complete online JavaScript course",
		"Jog around the park 3x",
		"10 minutes meditation",
		"Read for 1 hour",
		"Pick up groceries",
		"Complete Todo App on Frontend Mentor"
	];

	return (
		<div className="container">
			<div className="background dark">
				<div className="background__img">
				</div>
			</div>
			<div className="container__todo todo">
				<div className="todo__block">
					<Header/>
					<div className="todo__main">
						<div className="todo__create">
							<Create/>
						</div>

						<div className="todo__content">
							<ul className="todo__list">
								{todos.map ((item, index) => {
									return (
										<li className="todo__item" key={index}>
											<TodoItem text={item}/>
										</li>
									)
								})}
							</ul>
							<div className="todo__control">
								<div className="todo__numb">5 items left</div>
								<div className="todo__sort">
									<Button classList={["todo__sort-all", "btn", "active"]} text="All"/>
									<Button classList={["todo__sort-active", "btn"]} text="Active"/>
									<Button classList={["todo__sort-completed", "btn"]} text="Completed"/>
								</div>
								<div className="todo__clear">
									<Button classList={["todo__clear-btn", "btn"]} text="Clear completed"/>
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
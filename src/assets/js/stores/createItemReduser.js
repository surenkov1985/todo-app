import {CREATE_ITEM, TOGGLE_CLASS, INPUT_TEXT, REORDER_ITEMS, SET_ORDER_ITEMS, SET_REORDER_ITEMS, CLEAR_ACTIVE_ITEMS, DELETE_ITEM, SET_DELETE_ITEM} from "./types"
import React from "react"
import uniqid from "uniqid"

const todos = [
		{id: uniqid(), completed: "", order: 1, text: "Complete online JavaScript course"},
		{id: uniqid(), completed: "", order: 2,  text: "Jog around the park 3x"},
		{id: uniqid(), completed: "", order: 3,  text: "10 minutes meditation"},
		{id: uniqid(), completed: "", order: 4,  text: "Read for 1 hour"},
		{id: uniqid(), completed: "", order: 5,  text: "Pick up groceries"},
		{id: uniqid(), completed: "", order: 6,  text: "Complete Todo App on Frontend Mentor"}
	];

const initialState = {
	data: todos,
	text: "",
	className: "",
	id: "",
	order: null,
	reorderItem : null,
	orderItem: null,
	deletedItemId: null
};

export const createItemReducer = (state = initialState, action) => {

	console.log(action)
	switch(action.type) {

		case INPUT_TEXT:

			return {...state,
				text: action.text
			};
		case TOGGLE_CLASS:
			if ( state.className === "") {
				return {...state,
					className: state.className = "active"

				}
			} else if (state.className === "active") {
				return {
					...state,
					className: state.className = ""
				}
			};
		case CREATE_ITEM:
			return {
				...state,
				data: [...state.data, {id:  uniqid(),  completed: state.className, order: state.data.length + 1, text: state.text}]
			};
		case SET_REORDER_ITEMS:
			return {
				...state,
				reorderItem: action.reorderItem
			};
		case SET_ORDER_ITEMS:
			return {
				...state,
				orderItem: action.orderItem
			};
		case REORDER_ITEMS:
			return {
				...state,
				data: state.data.map((todo) => {

					if (todo.id === state.orderItem.id) {

						return {...todo, order: state.reorderItem.order}
					} else if (todo.id === state.reorderItem.id) {

						return {...todo, order: state.orderItem.order}
					}

					return todo;
				})
			};
		case CLEAR_ACTIVE_ITEMS:
			return {
				...state,
				data: state.data.filter((item) => {

					return !item.completed.length
				})
			};
		case SET_DELETE_ITEM:
			return {
				...state,
				deletedItemId: state.deletedItemId
			};
		case DELETE_ITEM:
			return {
				...state,
				data: state.data.filter((item) => {

					// if (item.id !== state.deletedItemId) {
					// 	return item
					// }
					return item.id !== state.deletedItemId
				})
			};


		default: return state
	}
};
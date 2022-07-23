import {CREATE_ITEM, TOGGLE_CLASS, TOGGLE_ITEM_CLASS, INPUT_TEXT, REORDER_ITEMS, SET_ORDER_ITEMS, SET_REORDER_ITEMS, CLEAR_ACTIVE_ITEMS, DELETE_ITEM, SET_DELETE_ITEM, SET_NUMB_ITEMS} from "./types"
import React from "react"
import uniqid from "uniqid"

const todos = [
		{id: uniqid(), completed: "", text: "Complete online JavaScript course"},
		{id: uniqid(), completed: "", text: "Jog around the park 3x"},
		{id: uniqid(), completed: "", text: "10 minutes meditation"},
		{id: uniqid(), completed: "", text: "Read for 1 hour"},
		{id: uniqid(), completed: "", text: "Pick up groceries"},
		{id: uniqid(), completed: "", text: "Complete Todo App on Frontend Mentor"}
	];

const initialState = {
	data: todos,
	text: "",
	active: false,
	className: "",
	id: "",
	order: null,
	reorderItem : null,
	orderItem: null,
	deletedItemId: "",
	numbItems: todos.length
};

export const createItemReducer = (state = initialState, action) => {

	console.log(action)
	switch(action.type) {

		case INPUT_TEXT:

			return {...state,
				text: action.text
			};
		case TOGGLE_CLASS:
			if ( !action.active) {
				return {...state,
					className: state.className = "active"

				}
			} else {
				return {
					...state,
					className: state.className = ""
				}
			};
		case TOGGLE_ITEM_CLASS:
			return {...state,
				data: state.data.map((item) => {
					if (action.active && item.id === action.id) {

						return {...item, completed: "active"}
					} else if (!action.active && item.id === action.id) {

						return {...item, completed: ""}
					}

					return item
				})
			};
		case CREATE_ITEM:
			return {
				...state,
				data: [...state.data, {id:  uniqid(),  completed: action.className, text: action.text}],
				className: state.className = ""
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

						return {...state.reorderItem}
					} else if (todo.id === state.reorderItem.id) {

						return {...state.orderItem}
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
				deletedItemId: action.deletedItemId
			};
		case DELETE_ITEM:
			return {
				...state,
				data: action.data.filter((todo) => {

					return todo.id !== state.deletedItemId
				}),
			};
		case SET_NUMB_ITEMS:
			return {
				...state,
				numbItems: action.numbItems !== undefined ? action.numbItems : state.data.length
			};


		default: return state
	}
};
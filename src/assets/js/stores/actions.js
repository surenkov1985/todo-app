import {THEME_TOGGLE, CREATE_ITEM, INPUT_TEXT, TOGGLE_CLASS, REORDER_ITEMS, SET_ORDER_ITEMS, SET_REORDER_ITEMS, CLEAR_ACTIVE_ITEMS, DELETE_ITEM, SET_DELETE_ITEM} from "./types"

export const themeToggle = () => { return {type: THEME_TOGGLE} };

export const inputText = (text) => {

	return {
		type: INPUT_TEXT,
		text
}};

export const createItem = (className, text) => {

	return {
		type: CREATE_ITEM,
		className,
		text
	}
};
export const toggleClass = (className) => {

	return {
		type: TOGGLE_CLASS,
		className
	}
};

export const setOrderItem = (orderItem) => {

	return {
		type: SET_ORDER_ITEMS,
		orderItem
	}
}

export const setReorderItem = (reorderItem) => {

	return {
		type: SET_REORDER_ITEMS,
		reorderItem
	}
}
export const reorderItem = (orderItem, reorderItem) => {

	return {

		type: REORDER_ITEMS,
		orderItem,
		reorderItem
	}
};
export const clearActiveItems = (data) => {

	return {
		type: CLEAR_ACTIVE_ITEMS,
		data
	}
}
export const setDeletedItem = (deletedItemId) => {

	return {
		type: SET_DELETE_ITEM,
		deletedItemId
	}
}
export const deletedItem = (data, deletedItemId) => {

	return {
		type: DELETE_ITEM,
		data,
		deletedItemId
	}
}

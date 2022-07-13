import {combineReducers} from "redux";
import {themeReducer} from "./themeReducer";
import {createItemReducer} from "./createItemReduser"


export const rootReducer = combineReducers({
	themeReducer,
	createItemReducer
})
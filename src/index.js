import "/assets/scss/main.scss";
import React from "react";
import { createRoot } from 'react-dom/client';
import {createStore} from "redux";
import {rootReducer} from "/assets/js/stores/rootReducer";
import {Provider} from "react-redux";

const container = document.getElementById('app');
const root = createRoot(container);


// import configureStore from './assets/js/stores/store'

import App from "./assets/js/components/App";
const store = createStore(rootReducer);

root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);

{/*<Provider store={configureStore}>*/}

// </Provider>
import "/assets/scss/main.scss";
import React from "react";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
import {Provider} from "react-redux";
import store from './assets/js/stores/store'

import App from "./assets/js/components/App";

root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);

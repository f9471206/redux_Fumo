import { legacy_createStore as createStore } from "redux";

//引入 redux-devtoos-extension
import { composeWithDevTools } from "@redux-devtools/extension";

import allReducer from "./reduces";

export default createStore(allReducer, composeWithDevTools());

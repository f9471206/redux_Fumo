import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/redux_Fumo">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

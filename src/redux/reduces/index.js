/**
 * 該文件用於彙總所有的 reducer 為一個總的 reducer
 */

import { combineReducers } from "redux";

import products from "./products";
import shoppingCart from "./shoppingCart";
import order from "./order";

//彙總所有的 reducer 變為一個總的 reducer

export default combineReducers({
  order,
  products,
  shoppingCart,
});

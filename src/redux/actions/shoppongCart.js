import {
  ADD_SHOPPINGCART,
  REMOVE_SHOPPINGCART,
  CHANGE_QUANTITY,
  DELETE_ALLSHOPPINGCART,
} from "../constants";

//增加購物車
export const addShoppingCart = (data) => ({ type: ADD_SHOPPINGCART, data });
//刪除購物車
export const removeShoppingCart = (data) => ({
  type: REMOVE_SHOPPINGCART,
  data,
});
//修改數量
export const changeQuantity = (data) => ({ type: CHANGE_QUANTITY, data });

//結帳後刪除所有購物車
export const deleteAllShoppingCart = (data) => ({
  type: DELETE_ALLSHOPPINGCART,
  data,
});

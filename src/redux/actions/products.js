import { STORE_SORT, CHANGE_PAGE } from "../constants";
//商品排序
export const storeSort = (data) => ({ type: STORE_SORT, data });

//換頁
export const changePage = (data) => ({ type: CHANGE_PAGE, data });

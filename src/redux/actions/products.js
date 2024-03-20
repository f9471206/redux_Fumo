import { STORE_SORT, PRODUCT_DETAIL } from "../constants";
//商品排序
export const storeSort = (data) => ({ type: STORE_SORT, data });
//商品細節
export const productDetail = (data) => ({ type: PRODUCT_DETAIL, data });

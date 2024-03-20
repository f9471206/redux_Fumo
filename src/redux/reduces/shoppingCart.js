import {
  ADD_SHOPPINGCART,
  REMOVE_SHOPPINGCART,
  CHANGE_QUANTITY,
  DELETE_ALLSHOPPINGCART,
} from "../constants";

const initState = [
  {
    key: "1",
    name: "reimu",
    price: 1000,
    quantity: 1,
    total: 1000,
    url: "https://img.amiami.com/images/product/main/222/GOODS-04238024.jpg",
  },
];

export default function shoppingCart(proState = initState, action) {
  const { type, data } = action;
  switch (type) {
    //增加一個
    case ADD_SHOPPINGCART:
      data.total = data.price * data.quantity;
      return [...proState, data];
    //刪除一個
    case REMOVE_SHOPPINGCART:
      const newObj = proState.filter((obj) => obj.key !== data.id);
      return newObj;
    //修改數量
    case CHANGE_QUANTITY:
      const { id, value } = data;
      const newChangeObj = proState.filter((obj) => {
        //找到 購物車中 該項的 ID 修改數量及總價
        if (obj.key == id) {
          obj.quantity = value;
          obj.total = obj.price * value;
        }
        return obj;
      });
      return newChangeObj;
    //結帳後刪除全部購物車
    case DELETE_ALLSHOPPINGCART:
      return (proState = []);

    default:
      return proState;
  }
}

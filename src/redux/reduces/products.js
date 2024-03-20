import { type } from "@testing-library/user-event/dist/type";
import { STORE_SORT } from "../constants";

const initState = [
  {
    id: "01",
    name: "Reimu",
    price: "1000",
    detail: "Reimu.......",
    url: "https://img.amiami.com/images/product/main/222/GOODS-04238024.jpg",
    type: "shrine",
  },
  {
    id: "02",
    name: "Marisa",
    price: "950",
    detail: "Marisa.....",
    url: "https://img.amiami.com/images/product/main/222/GOODS-04238025.jpg",
    type: "magic",
  },
  {
    id: "03",
    name: "Cirno",
    price: "999",
    detail: "Cirno.....",
    url: "https://img.amiami.com/images/product/main/233/GOODS-04390414.jpg",
    type: "other",
  },
  {
    id: "04",
    name: "Koishi",
    price: "1000",
    detail: "Koishi....",
    url: "https://img.amiami.com/images/product/main/234/GOODS-04428514.jpg",
    type: "Subterranean",
  },
  {
    id: "05",
    name: "Yuyuko",
    price: "1200",
    detail: "Yuyuko.........",
    url: "https://img.amiami.com/images/product/main/223/GOODS-04270990.jpg",
    type: "other",
  },
  {
    id: "06",
    name: "Remilia",
    price: "1180",
    detail: "Remilia.........",
    url: "https://img.amiami.com/images/product/main/231/GOODS-04321734.jpg",
    type: "Konmakan",
  },
];

export default function Products(proState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case STORE_SORT:
      //如果按ALL 回傳全部商品
      if (data == "all") {
        proState = initState;
        return proState;
      }
      //依照 Sort 回傳商品
      const sortObj = initState.filter((obj) => {
        return obj.type == data;
      });
      proState = sortObj;
      return proState;
    default:
      return proState;
  }
}

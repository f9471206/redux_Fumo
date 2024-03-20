import { STORE_SORT, PRODUCT_DETAIL } from "../constants";

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
    type: "Hakugyokurou",
  },
  {
    id: "06",
    name: "Remilia",
    price: "1180",
    detail: "Remilia.........",
    url: "https://img.amiami.com/images/product/main/231/GOODS-04321734.jpg",
    type: "Konmakan",
  },
  {
    id: "07",
    name: "Satori",
    price: "1180",
    detail: "Satori.........",
    url: "https://img.amiami.com/images/product/main/234/GOODS-04428513.jpg",
    type: "Subterranean",
  },
  {
    id: "08",
    name: "Flandre",
    price: "1200",
    detail: "Flandre.........",
    url: "https://img.amiami.com/images/product/main/231/GOODS-04321733.jpg",
    type: "Konmakan",
  },
  {
    id: "09",
    name: "Youmu",
    price: "1200",
    detail: "Youmu.........",
    url: "https://img.amiami.com/images/product/main/232/GOODS-04347181.jpg",
    type: "Hakugyokurou",
  },
  {
    id: "10",
    name: "Alice",
    price: "1100",
    detail: "YAlice.........",
    url: "https://img.amiami.com/images/product/main/234/GOODS-04417664.jpg",
    type: "magic",
  },
];

export default function Products(proState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case STORE_SORT:
      //如果按ALL 回傳全部商品
      if (data === "all") {
        proState = initState;
        return proState;
      }
      //依照 Sort 回傳商品
      const sortObj = initState.filter((obj) => obj.type === data);
      proState = sortObj;
      return proState;
    //商品的 detail
    case PRODUCT_DETAIL:
      const newDetail = initState.filter((obj) => obj.id === data);
      proState = newDetail;
      return proState;
    default:
      return proState;
  }
}

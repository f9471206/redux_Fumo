import Store from "../containers/Store";
import Items from "../containers/Store/items";
import Detail from "../containers/Store/items/detail";
import Checkout from "../containers/Checkout";
import Address from "../containers/Checkout/Address";
import CheckDetail from "../containers/Checkout/CheckDetail";
import Order from "../containers/Order";
import NotFound from "../page/notFound";

const routes = [
  {
    path: "/",
    element: <Store />,
    children: [
      {
        path: "",
        element: <Items />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
  {
    path: "checkout",
    element: <Checkout />,
    children: [
      {
        path: "",
        element: <Address />,
      },
      {
        path: ":detail",
        element: <CheckDetail />,
      },
    ],
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;

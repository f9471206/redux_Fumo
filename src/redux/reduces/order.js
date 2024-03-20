import { ADD_ORDER } from "../constants";
const initState = [];

export default function order(proState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_ORDER:
      return [...proState, data];
    default:
      return proState;
  }
}

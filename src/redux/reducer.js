import { ActionTypes } from "./action-type";

const initalState = [
  {
    id: 1,
    title: "hello world",
    category: "product",
  },
];

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

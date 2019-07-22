import { TYPE_1, TYPE_2, TYPE_3, TYPE_4 } from "../actions/types";

const initialState = {
  something: false,
  something1: "",
  something2: [],
  something4: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE_1:
      return {
        ...state,
        something: true
      };
    case TYPE_2:
      return {
        ...state,
        something1: "something"
      };
    default:
      return state;
  }
};

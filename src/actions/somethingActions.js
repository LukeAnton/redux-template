import { TYPE_1, TYPE_2, TYPE_3, TYPE_4 } from "./types";

export const doAsyncSomething = () => async dispatch => {
  try {
    const res = await fetch("/api");
    const data = await res.json();
    dispatch({
      type: TYPE_1,
      payload: data
    });
  } catch (err) {
    dispatch({ type: ERROR_TYPE, payload: err.response.data });
  }
};

export const doSomethingElse = () => {
  return {
    type: TYPE_2
  };
};

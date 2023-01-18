import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const ACTION = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  CHANGE_TEXT: "CHANGE_TEXT",
  ADD_TO_LIST: "ADD_TO_LIST",
};

function increase() {
  return {
    type: ACTION.INCREASE,
  };
}

const decrease = () => ({
  type: ACTION.DECREASE,
});

const changeText = (text) => ({
  type: ACTION.CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ACTION.ADD_TO_LIST,
  item,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case ACTION.DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ACTION.CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ACTION.ADD_TO_LIST:
      return {
        ...state,
        item: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer : 데이터(state) 를 수정하는 곳, 무조건 function 이어야 한다.
const countReducer = (state = 0) => {
  // modify state
  return state;
};

// store : 데이터(state) 를 담아두는 곳
const countStore = createStore(countReducer);
console.log(countStore.getState());

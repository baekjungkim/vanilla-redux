import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// reducer : 데이터(state) 를 수정하는 곳, 무조건 function 이어야 한다.
const countReducer = (count = 0, action) => {
  // modify state
  // if (action.type === "ADD") {
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// store : 데이터(state) 를 담아두는 곳
const countStore = createStore(countReducer);

// dispatch를 통해서만 reducere의 데이터 action및 type 을 지정할 수 있다.
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

//countStore.getState() : 해당 스토어의 state를 가져온다.
const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe : 해당 Store를 구독하고 데이터(state)가 변경되는것을 감지한다.
countStore.subscribe(onChange);

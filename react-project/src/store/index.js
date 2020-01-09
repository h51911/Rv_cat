//引入
import { createStore } from "redux";
//state数据
const initstate = {
  data: []
};
//reducer函数，用于指定state修改逻辑，
const reducer = (state = initstate, action) => {
  switch (action.type) {
    // 修改的动作
    case "gai":
      return {
        //将值覆盖到state
        ...state, //把这个解构出来也会有cartlist，但是下面的cartlist会覆盖上面的
        data: action.payload
      };
    default:
      return state;
  }
};
//创建仓库store 提供了三个方法 { subscribe, dispatch, getState }。
let store = createStore(reducer);
export default store;

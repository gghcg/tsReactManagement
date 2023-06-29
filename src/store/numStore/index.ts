import numStore from "./stateStore";

interface Action {
  type: string;
  valName: string;
  val: number;
  [propName: string]: any;
}
let numReducer = (state = numStore, action: Action) => {
  let newState = JSON.parse(JSON.stringify(state));
  console.log(newState, state);
  for (let key in numStore.actionNames) {
    if (action.type === numStore.actionNames[key]) {
      numStore.actions[numStore.actionNames[key]](
        newState,
        action.valName,
        action.val
      );
    }
  }
  return newState;
};

export default numReducer;

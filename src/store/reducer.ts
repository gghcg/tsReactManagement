interface Action {
  type: string;
  [propName: string]: any;
}

const defaultState = {
  num: 20,
};
let reducer = (state = defaultState, action: Action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "add": {
      newState.num += action.value;
      break;
    }
    default:
      break;
  }
  return newState;
};

export default reducer;

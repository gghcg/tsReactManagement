interface NumberStore {
  [propName: string]: number;
}

const numStore = {
  state: {
    num: 10,
  },
  actions: {
    setNumVal(newState: any, stateName: string, val: number) {
      console.log(newState);
      (newState as NumberStore).state[stateName] = val;
    },
    getNumVal(newState: any, stateName: string, val: number) {
      
    },
  },
  actionNames: {},
};
const actionNames: any = {};
for (let k in numStore.actions) {
  actionNames[k] = k;
}
numStore.actionNames = actionNames;
export default numStore;

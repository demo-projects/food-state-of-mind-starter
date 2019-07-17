export function combineReducers(reducerMap) {
  return function (state, action) {
    const keys = Object.keys(reducerMap);
    const nextState  = {};

    keys.forEach( key => {
      nextState[key] = reducerMap[key](state, action)
    });

    return nextState;
  }
}
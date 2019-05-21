export const cartReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_ALCOHOL":
      return [...state, action.alcohol];
    case "REMOVE_ALCOHOL":
      const itemIndex = state.indexOf(action.alcohol)
      state.splice(itemIndex, 1)
      return [...state];
    default:
      return state;
  }
}
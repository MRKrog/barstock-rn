export const cartReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_ALCOHOL":
      return [...state, action.alcohol];
    case "REMOVE_ALCOHOL":
      const itemIndex = state.indexOf(action.alcohol)
      state.splice(itemIndex, 1)
      return [...state];
    case "REMOVE_ALCOHOL_GROUP":
      let newItem = state.filter(item => action.id !== item.id)
      return newItem
    default:
      return state;
  }
}

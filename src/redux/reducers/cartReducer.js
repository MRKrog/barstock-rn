export const cartReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_ALCOHOL":
      let newCartItem = {...action.alcohol, count: 1}
      return [...state, newCartItem];
    case "UPDATE_ALCOHOL":
      let updatedState = state.map(item => {
        if(item.id === action.id && action.number === 1) {
          item.count++
        } else if (item.id === action.id && action.number === -1) {
          item.count--
        }
        return item
      })
      return updatedState
    case "REMOVE_ALCOHOL":
      const itemIndex = state.indexOf(action.alcohol)
      state.splice(itemIndex, 1)
      return [...state];
    case "REMOVE_ALCOHOL_GROUP":
      let newItem = state.filter(item => action.id !== item.id)
      return newItem
    case "RESET_CART":
      let resetCart = []
      return resetCart
    default:
      return state;
  }
}

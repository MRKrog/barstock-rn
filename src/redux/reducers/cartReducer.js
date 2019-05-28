
export const cartReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_ALCOHOL":
      let newCartItem = {id: action.id, quantity: 1}
      return [...state, newCartItem];
    case "UPDATE_ALCOHOL":
      let updatedState = state.map(item => {
        if(item.id == action.id) {
          item.quantity += action.number
        } else if (item.id == action.id) {
          item.quantity += action.number
        }
        return item
      })
      return updatedState
    case "REMOVE_ALCOHOL":
      const itemIndex = state.indexOf(action.id)
      state.splice(itemIndex, 1)
      return [...state];
    case "REMOVE_ALCOHOL_GROUP":
      let newItem = state.filter(item => action.id !== item.id)
      return newItem
    case "RESET_CART":
      let resetCart = []
      return resetCart
    case "RE_ORDER":
      return action.order
    default:
      return state;
  }
}

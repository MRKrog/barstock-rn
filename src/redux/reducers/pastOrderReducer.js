export const pastOrderReducer = (state = [], action) => {
  switch(action.type){
    case "SET_PAST_ORDER":
      return action.order
    case "UPDATE_PAST_ORDER":
      let updatedArray = [...state, action.order]
      let lastOrder = updatedArray.pop()
      updatedArray.unshift(lastOrder)
      return updatedArray
    default:
      return state;
  }
}
export const orderReducer = (state = [], action) => {
  switch(action.type){
    case "UPDATE_ORDER":
      return action.order;
    default:
      return state;
  }
}

export const orderReducer = (state = [], action) => {
  switch(action.type){
    case "GET_ORDER":
      return action.order;
    default:
      return state;
  }
}

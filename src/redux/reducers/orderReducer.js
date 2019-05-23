export const orderReducer = (state = [], action) => {
  switch(action.type){
    case "UPDATE_ORDER":
    console.log(action.order);
      return action.order;
    default:
      return state;
  }
}

export const pastOrderReducer = (state = [], action) => {
  switch(action.type){
    case "SET_PAST_ORDER":
      return action.order
    default:
      return state;
  }
}
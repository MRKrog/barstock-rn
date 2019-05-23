export const modalReducer = (state=false, action) => {
  switch(action.type){
    case "TOGGLE_MODAL":
      return action.bool
    default:
      return state;
  }
}
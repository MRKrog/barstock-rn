export const  categorySelectedReducer = (state = "", action) => {
  switch(action.type){
    case "TOGGLE_CATEGORY":
      return action.cat;
    default:
      return state;
  }
}



export const  categorySelectedReducer = (state = "", action) => {
  switch(action.type){
    case "TOGGLE_CATEGORY":
    console.log("hello world", action.cat)
      return action.cat;
    default:
      return state;
  }
}
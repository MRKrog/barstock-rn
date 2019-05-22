export const alcoholReducer = (state = [], action) => {
  switch(action.type){
    case "SET_ALCOHOL":
      return action.alcohol
    default:
      return state
  }
}

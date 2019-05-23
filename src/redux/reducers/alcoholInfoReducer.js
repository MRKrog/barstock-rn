export const alcoholInfoReducer = (state = {}, action) => {
  switch(action.type){
    case "SET_ALCOHOL_INFO":
      return action.info
    default:
      return state
  }
}
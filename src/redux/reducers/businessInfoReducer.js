
export const businessInfoReducer = (state = {} , action) => {
  switch(action.type){
    case "SET_BUSINESS_INFO":
      return action.info;
    default:
      return state;
  }
}
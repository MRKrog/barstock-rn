
export const businessInfoReducer = (state = {} , action) => {
  switch(action.type){
    case "SET_BUSINESS_INFO":
      console.log("im in the reducer",action.info)
      return action.info;
    default:
      return state;
  }
}
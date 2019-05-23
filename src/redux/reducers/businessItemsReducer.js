export const businessItemsReducer = (state = [], action) => {
  switch(action.type){
    case "SET_BUSINESS_ITEMS":
      return action.businessItems
    default:
      return state
  }
}
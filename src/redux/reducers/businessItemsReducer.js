export const businessItemsReducer = (state = [], action) => {
  switch(action.type){
    case "SET_BUSINESS_ITEMS":
      return action.businessItems;
    case "ADD_BUSINESS_ITEM":
      return [...state, action.businessItems];
    case "UPDATE_BUSINESS_ITEM":
      const updatedBusinessItems = state.map(item => {
        if(item.id === action.businessItems.id){
          return action.businessItems
        }else{
          return item
        }
      })
      return updatedBusinessItems;
    default:
      return state
  }
}
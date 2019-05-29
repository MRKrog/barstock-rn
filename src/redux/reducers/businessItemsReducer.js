export const businessItemsReducer = (state = [], action) => {
  switch(action.type){
    case "SET_BUSINESS_ITEMS":
      return action.businessItems;
    case "ADD_BUSINESS_ITEM":
      console.log("hello world", action.businessItems)
      let updateBusinessItems = [...state, action.businessItems];
      console.log(updateBusinessItems)
      return updateBusinessItems
    case "UPDATE_BUSINESS_ITEM":
      const updatedBusinessItems = state.map(item => {
        if(item.id == action.businessItems.id) {
          item.attributes.price_sold = action.businessItems.attributes.price_sold
          item.attributes.quantity = action.businessItems.attributes.quantity
          item.attributes.serving_size = action.businessItems.attributes.serving_size
          return item
        } else {
          return item
        }
      })
      return updatedBusinessItems;
    default:
      return state
  }
}

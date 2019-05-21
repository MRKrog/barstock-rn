export const cartReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_ALCHOHOL":
      let updatedCart
      const addCheck = state.find(alchohol => {
        return alchohol.id === action.alchohol.id
      })
      if(addCheck){
        updatedCart = state.map(alchohol => {
          if(alchohol.id === action.alchohol.id){
            return {...alchohol, count: alchohol.count += 1}
          }else{
            return alchohol
          }
        })
      }else{
        updatedCart = [...state, {...action.alchohol, count: 1}]
      }
      return updatedCart;
    case "REMOVE_ALCHOHOL":
      let removedAlchohol;
      const removeCheck = state.find(alchohol => {
        return alchohol.id === action.alchohol.id
      })
      if(removeCheck.count === 1){
        removedAlchohol = state.filter(alchohol => {
          return alchohol.id !== action.alchohol.id
        })
      }else{
        removedAlchohol = state.map(alchohol => {
          if(alchohol.id === action.alchohol.id){
            return {...alchohol, count: alchohol.count -= 1}
          }else{
            return alchohol
          }
        })
      }
      return removedAlchohol;
    default:
      return state;
  }
}
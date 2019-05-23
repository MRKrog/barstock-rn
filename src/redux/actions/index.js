export const setLoading = loading => ({
  type: "SET_LOADING",
  loading
});

export const setAlcohol = alcohol => ({
  type: "SET_ALCOHOL",
  alcohol
})

export const addToCart = alcohol => ({
  type: "ADD_ALCOHOL",
  alcohol
})

export const removeFromCart = alcohol => ({
  type: "REMOVE_ALCOHOL",
  alcohol
})

export const removeCartGroup = id => ({
  type: "REMOVE_ALCOHOL_GROUP",
  id
})

export const updateOrder = order => ({
  type: "UPDATE_ORDER",
  order
})

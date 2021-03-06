export const setLoading = loading => ({
  type: "SET_LOADING",
  loading
});

export const setAlcohol = alcohol => ({
  type: "SET_ALCOHOL",
  alcohol
})

export const addToCart = id => ({
  type: "ADD_ALCOHOL",
  id
})

export const removeFromCart = id => ({
  type: "REMOVE_ALCOHOL",
  id
})

export const setBusinessItems = businessItems => ({
  type: "SET_BUSINESS_ITEMS",
  businessItems
})

export const removeCartGroup = id => ({
  type: "REMOVE_ALCOHOL_GROUP",
  id
})

export const setOrder = order => ({
  type: "SET_ORDER",
  order
})

export const toggleModalDisplay = bool => ({
  type: "TOGGLE_MODAL",
  bool
})

export const setAlcoholInfo = info => ({
  type: "SET_ALCOHOL_INFO",
  info
})

export const updateCart = (id, number) => ({
  type: "UPDATE_ALCOHOL",
  id,
  number
})

export const emptyCart = data => ({
  type: "RESET_CART",
  data
})

export const addBusinessItems = businessItems => ({
  type: "ADD_BUSINESS_ITEM",
  businessItems
})

export const updateBusinessItems = businessItems => ({
  type: "UPDATE_BUSINESS_ITEM",
  businessItems
})

export const categorySelected = cat => ({
  type: "TOGGLE_CATEGORY",
  cat
})

export const getPastOrder = order => ({
  type: "SET_PAST_ORDER", 
  order
})

export const reOrder = order => ({
  type: "RE_ORDER",
  order
})

export const setBusinessInfo = info => ({
  type: "SET_BUSINESS_INFO",
  info
})

export const swiperIndex = index => ({
  type: "CHANGE_INDEX",
  index
})

export const updatePastOrder = order => ({
  type: "UPDATE_PAST_ORDER",
  order
})

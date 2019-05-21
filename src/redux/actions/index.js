export const setLoading = loading => ({
  type: "SET_LOADING",
  loading
});

export const setAlchohol = alchohol => ({
  type: "SET_ALCHOHOL",
  alchohol
})

export const addToCart = alchohol => ({
  type: "ADD_ALCHOHOL",
  alchohol
})

export const removeFromCart = alchohol => ({
  type: "REMOVE_ALCHOHOL",
  alchohol
})

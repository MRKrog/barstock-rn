const createOrderDisplay = () => {
  let quantityAmount = this.combineQuantities();
  let combinedOrder = this.createOrder(quantityAmount);
  return combinedOrder
}

const combineQuantities = () => {
  let quantityAmount = this.props.cart.reduce((acc, el) => {
    if (!acc[el.name]) acc[el.name] = 0
    acc[el.name]++;
    return acc;
  }, {});
  return quantityAmount;
}

export const generateCost = (cart) => {
  let totalCost = cart.reduce((acc, item) => {
    acc += (item.price * item.count)
    return acc
  }, 0)
  return totalCost
}

export const createOrder = (quantityAmount) => {
  let combinedCart = Object.keys(quantityAmount).map((item, index) => {
    let itemInfo = this.props.cart.find(cartItem => cartItem.name === item);
    let type = this.findType(itemInfo.alc_type, quantityAmount[item])
    return {
      id: itemInfo.id,
      name: itemInfo.name,
      total: itemInfo.price * quantityAmount[item],
      ounces: itemInfo.ounces * quantityAmount[item],
      alc_category: itemInfo.alc_category,
      alc_type: itemInfo.alc_type,
      thumbnail: itemInfo.thumbnail,
      unit: itemInfo.unit,
      quantity: quantityAmount[item],
      type: type,
      profits: 10
    }
  })
  return combinedCart;
}

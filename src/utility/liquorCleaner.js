
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

export const generateCost = (cart, alcohol) => {
  const totalCost = cart.reduce((acc, item) => {
    const alcoholInfo = alcohol.find(alcohol => item.id == alcohol.id)
    acc += (alcoholInfo.attributes.price * item.quantity)
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


// let currentMargin = (100 - ((distCost / ((distProdServSize / menuProdServSize) * menuPrice)) * 100))

// amount of drinks
// distProdServSize / menuProdServSize // 22.5333
// Revenue
// (distProdServSize / menuProdServSize) * menuPrice // 67.5999
// Net Profit
// ((distProdServSize / menuProdServSize) * menuPrice - distCost) // 48.8199
// Margin .277
// ((distCost / ((distProdServSize / menuProdServSize) * menuPrice)) * 100)

// getSingleReturn = (item) => {
//   const { businessItems } = this.props;
//   // console.log(item);
//   return item.reduce((acc, distItem) => {
//     let busItem = businessItems.find(item => {
//       return item.inventory_code === distItem.inventory_code;
//     });
//     let distProdServSize = distItem.size;
//     let menuProdServSize = busItem.serving_size;
//     let menuPrice = busItem.price_sold;
//     let distCost = distItem.price;
//     return (acc +=
//       (distProdServSize / menuProdServSize) * menuPrice - distCost);
//   }, 0);
// };




// alc_category: "whiskey"
// alc_type: "liquor"
// id: 1
// item_name: "Fireball"
// price_sold: 3
// quantity: 5
// serving_size: 1.5


// alc_category: "whiskey"
// alc_type: "liquor"
// count: 1
// id: "1"
// name: "Fireball"
// ounces: 33.8
// price: 18.78
// quantity: 100
// thumbnail: "https://products2.imgix.drizly.com/ci-fireball-cinnamon-whisky-355ddd0b8b3a2c55.png?auto=format%2Ccompress&fm=jpeg&q=20"
// unit: "ounces"

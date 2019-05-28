export const getMarkUp = (busItem, distItem) => {
  // ((Price - Cost) / Cost) * 100 = % Markup
  let distProdServSize = distItem.attributes.ounces;
  let menuProdServSize = Number(busItem.servingSize);
  let menuPrice = Number(busItem.price)
  let numberOfDrinks = (distProdServSize / menuProdServSize)
  let costPerDrink = ( distItem.attributes.price / numberOfDrinks )
  let singleMarkUp = ((menuPrice - costPerDrink) / costPerDrink) * 100;
  return singleMarkUp
};

export const getMargin = (barItem, distItem) => {
  // ((Revenue - Cost) / Revenue) * 100 = % Profit Margin
  let distProdServSize = distItem.attributes.ounces;
  let menuProdServSize = Number(barItem.servingSize);
  let menuPrice = Number(barItem.price)
  let cost = distItem.attributes.price;
  let revenue = ((distProdServSize / menuProdServSize) * menuPrice)
  let numberOfDrinks = (distProdServSize / menuProdServSize)
  let singleMargin = ((revenue - cost) / revenue) * 100;
  return singleMargin
};

import * as actions from '../actions/index';
import { fetchOptions } from '../../utility/fetchOptions';

export const addBusinessItem = (id, price, inStock, servingSize) => {
  const itemNew = {
    api_key: "0yWwUm5CZ8CGR8MhT7FL9w",
    price_sold: price,
    quantity: inStock,
    serving_size: servingSize,
    item_id: id
  }
  const url = `https://barstock-backend.herokuapp.com/api/v1/business_items`;
  const options = fetchOptions("POST", itemNew);
  return async (dispatch) => {
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      dispatch(actions.addBusinessItems(data.data));
    } catch (error) {
      console.log(error.message);
    }
  }
}

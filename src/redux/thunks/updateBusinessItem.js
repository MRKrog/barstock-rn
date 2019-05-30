import * as actions from '../actions/index';
import { fetchOptions } from "../../utility/fetchOptions"

export const updateBusinessItem = (id, price, inStock, servingSize) => {
  const itemNew = {
    api_key: "0yWwUm5CZ8CGR8MhT7FL9w",
    price_sold: price,
    quantity: inStock,
    serving_size: servingSize
  }
  const url = `https://barstock-backend.herokuapp.com/api/v1/business_items/${id}`;
  const options = fetchOptions("PATCH", itemNew);
  return async (dispatch) => {
    try {
      const response = await fetch(url, options)
      if(!response.ok) Error(response.message)
      const data = await response.json()
      console.log("asl;dkf waht",data.data)
      dispatch(actions.updateBusinessItems(data.data));
    } catch (error) {
      console.log(error.message);
    }
  }
}

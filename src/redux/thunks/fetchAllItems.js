import * as actions from '../actions/index';
import { fetchData } from '../../utility/fetchData';
import { fetchBusinessItems } from "./fetchBusinessItems"
import { fetchPastOrders } from "./fetchPastOrders"

export const fetchAllItems = () => {
  return async (dispatch) => {
    try {
      const url = `https://barstock-backend.herokuapp.com/api/v1/items?api_key=0yWwUm5CZ8CGR8MhT7FL9w`;
      const response = await fetchData(url);
      dispatch(actions.setAlcohol(response.data));
      await dispatch(fetchBusinessItems())
      await dispatch(fetchPastOrders())
    } catch (error) {
      console.log(error.message);
    }
  }
}

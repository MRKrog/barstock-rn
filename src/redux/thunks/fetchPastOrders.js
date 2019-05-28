import * as actions from '../actions/index';
import { fetchData } from '../../utility/fetchData';

export const fetchPastOrders = () => {
  return async (dispatch) => {
    try {
      const url = `https://barstock-backend.herokuapp.com/api/v1/orders?api_key=0yWwUm5CZ8CGR8MhT7FL9w`;
      const response = await fetchData(url);
      dispatch(actions.getPastOrder(response.data));
    } catch (error) {
      console.log(error.message);
    }
  }
}



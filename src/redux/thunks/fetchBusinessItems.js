import * as actions from '../actions/index';
import { fetchData } from '../../utility/fetchData';

export const fetchBusinessItems = () => {
  return async (dispatch) => {
    try {
      const url = `https://barstock-backend.herokuapp.com/api/v1/business_items?api_key=0yWwUm5CZ8CGR8MhT7FL9w`;
      const response = await fetchData(url);
      dispatch(actions.setBusinessItems(response.data));
    } catch (error) {
      console.log(error.message);
    }
  }
}

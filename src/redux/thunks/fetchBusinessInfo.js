import * as actions from '../actions/index';
import { fetchData } from '../../utility/fetchData';

export const fetchBusinessInfo = () => {
  return async (dispatch) => {
    try {
      const url = `https://barstock-backend.herokuapp.com/api/v1/businesses/account?api_key=0yWwUm5CZ8CGR8MhT7FL9w`;
      const response = await fetchData(url);
      if(!response.ok) Error(response.message)
      dispatch(actions.setBusinessInfo(response));
    } catch (error) {
      console.log(error.message);
    }
  }
}

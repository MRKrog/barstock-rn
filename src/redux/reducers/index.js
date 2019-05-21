import { combineReducers } from 'redux';
import { alchoholReducer } from "./alchoholReducer"
import { cartReducer } from "./cartReducer"
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  alchohol: alchoholReducer,
  cart: cartReducer
})

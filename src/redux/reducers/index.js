import { combineReducers } from 'redux';
import { alcoholReducer } from "./alcoholReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  alcohol: alcoholReducer,
  cart: cartReducer,
  order: orderReducer,
})

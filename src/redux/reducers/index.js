import { combineReducers } from 'redux';
import { alcoholReducer } from "./alcoholReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";
import { loadingReducer } from './loadingReducer';
import { businessItemsReducer } from "./businessItemsReducer"

export const rootReducer = combineReducers({
  loading: loadingReducer,
  alcohol: alcoholReducer,
  businessItems: businessItemsReducer,
  cart: cartReducer,
  order: orderReducer
})

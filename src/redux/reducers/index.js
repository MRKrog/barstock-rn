import { combineReducers } from 'redux';
import { alcoholReducer } from "./alcoholReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";
import { loadingReducer } from './loadingReducer';
import { businessItemsReducer } from "./businessItemsReducer";
import { modalReducer } from "./modalReducer";
import { alcoholInfoReducer } from "./alcoholInfoReducer"
import { categorySelectedReducer } from "./categorySelectedReducer";
import { pastOrderReducer } from "./pastOrderReducer";
import { businessInfoReducer } from "./businessInfoReducer";
import { swiperReducer } from "./swiperReducer";

export const rootReducer = combineReducers({
  loading: loadingReducer,
  alcohol: alcoholReducer,
  businessItems: businessItemsReducer,
  cart: cartReducer,
  order: orderReducer,
  modalDisplay: modalReducer,
  alcoholInfo: alcoholInfoReducer,
  selectedCategory: categorySelectedReducer,
  pastOrder: pastOrderReducer,
  businessInfo: businessInfoReducer,
  swiperIndex: swiperReducer
})

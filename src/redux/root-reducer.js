import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import categoryReducer from "./category/category.reducer";
import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);

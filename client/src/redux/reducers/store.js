import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";
import { catalogReducer } from "./catalogReducer";
import { filteredCatalogReducer } from "./filteredCatalogReducer";
import { popupReducer } from "./popupReducer";
import { productIDReducer } from "./productIDReducer";
import { qtyCounterReducer } from "./qtyCounterReducer";
import { shoppingCartReducer } from "./shoppingCartReducer";

const reducers = combineReducers({
  shoppingCart: shoppingCartReducer,
  auth: authReducer,
  popup: popupReducer,
  catalog: catalogReducer,
  productID: productIDReducer,
  filteredCatalog: filteredCatalogReducer,
  qtyCounter: qtyCounterReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

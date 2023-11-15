import { createStore, combineReducers } from "redux";

import { productReducer } from "./reducer/productReducer";
import { colorReducer } from "./reducer/colorReducer";
import { pdetailReducer } from "./reducer/pdetailReducer";
import { pcartReducer } from "./reducer/pcartReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({
      productReducer,
      colorReducer,
      pdetailReducer,
      pcartReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

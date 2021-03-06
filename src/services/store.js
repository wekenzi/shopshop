import { createStore } from "redux";
import rootReducer from "./reducer";


/* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */

export default store;
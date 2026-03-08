import { legacy_createStore, compose, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import { reducer as musicReducer } from "./Reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const myStore = legacy_createStore(musicReducer, enhancer);

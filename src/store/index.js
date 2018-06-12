import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { history } from "../history";
import { routerMiddleware, routerReducer } from "react-router-redux";
import thunk from "redux-thunk";

import { pokedex } from "./reducers/pokedex";
import { pokemon } from "./reducers/pokemon";

const middleware = [thunk],
  reducers_default = combineReducers({
    pokedex,
    pokemon,
    routing: routerReducer
  });

middleware.push(routerMiddleware(history));

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

export default createStore(reducers_default, enhancer); // applyMiddleware(...middleware));

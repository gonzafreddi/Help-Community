import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const composeEnhaser = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(rootReducer, composeEnhaser(applyMiddleware(thunk)))

export default store;
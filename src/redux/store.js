import thunk from "redux-thunk";
import UnitsReducer from "./reducers/unitsReducer";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";

const reducers = combineReducers({
  units: UnitsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
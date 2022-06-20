import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { taskReducers } from "../reducers/taskReducers";

const reducers = combineReducers({
  taskStore: taskReducers,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

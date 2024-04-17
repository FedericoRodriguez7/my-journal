import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";

const reducers = combineReducers({
    auth: authReducer
})

export const Store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
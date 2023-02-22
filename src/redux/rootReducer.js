import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import bookingReducer from "./bookingApp/bookingReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    bookingReducer:bookingReducer,
});

export default rootReducer;

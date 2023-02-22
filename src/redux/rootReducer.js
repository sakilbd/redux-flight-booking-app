import { combineReducers } from "redux";
import bookingReducer from "./bookingApp/bookingReducer";

const rootReducer = combineReducers({

    bookingReducer:bookingReducer,
});

export default rootReducer;

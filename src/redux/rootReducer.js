import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter:counterReducer,
    number:numberReducer,

});
export default rootReducer;
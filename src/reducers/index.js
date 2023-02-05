import changeNumber from "./UpDown";
import BgColor from "./BackColor";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber: changeNumber,
  BgColor: BgColor,
});

export default rootReducer;

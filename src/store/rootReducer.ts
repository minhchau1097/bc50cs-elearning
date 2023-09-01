import { combineReducers } from "redux";
import courseListReducer from "../page/HomeTemplate/HomePage/CourseList/duck/reducer";

export const rootReducer = combineReducers({
    courseListReducer,
});
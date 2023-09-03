import { combineReducers } from "redux";
import courseListReducer from "../page/HomeTemplate/HomePage/CourseList/duck/reducer";
import courseCategoryReducer from "../page/HomeTemplate/Course/duck/reducer";
import categoryReducer from "../page/HomeTemplate/Category/duck/reducer";
import authReducer from "page/AdminTemplate/AuthPage/duck/reducer";
export const rootReducer = combineReducers({
    courseListReducer,
    courseCategoryReducer,
    categoryReducer,
    authReducer,
});
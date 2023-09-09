import { combineReducers } from "redux";
import courseListReducer from "../page/HomeTemplate/HomePage/CourseList/duck/reducer";
import courseCategoryReducer from "../page/HomeTemplate/Course/duck/reducer";
import categoryReducer from "../page/HomeTemplate/Category/duck/reducer";
import authReducer from "page/AdminTemplate/AuthPage/duck/reducer";
import userReducer from "page/AdminTemplate/ManageUser/duck/reducer";
import detaiProductReducer from "page/HomeTemplate/Course/DetailProduct/duck/reducer";
import productReducer from "page/AdminTemplate/ManageProduct/duck/reducer";
import detailUserReducer from "page/HomeTemplate/Information/duck/reducer";
export const rootReducer = combineReducers({
    courseListReducer,
    courseCategoryReducer,
    categoryReducer,
    authReducer,
    userReducer,
    detaiProductReducer,
    productReducer,
    detailUserReducer,
});
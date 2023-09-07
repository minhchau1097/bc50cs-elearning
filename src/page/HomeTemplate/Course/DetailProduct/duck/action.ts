import { DETAIL_COURSE_REQUEST, DETAIL_COURSE_SUCCESS, DETAIL_COURSE_FAIL } from "./contants";
import api from "utils/api";
import { Action, Course } from "../../../../../type/type";


export const actFetchDetailCourse =(maKhoaHoc:any)=>{
    return (dispatch : any)=>{
        dispatch(actCourseCategoryRequest());
         api.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
        .then((res : any)=>{
            if(res.status === 200){ 
                dispatch(actCourseCategorySuccess(res.data));             
            }               
        })
        .catch((err)=>{
            dispatch(actCourseCategoryFail(err));        
        })
    }
};


const actCourseCategoryRequest =() :Action=>{
    return{
        type:DETAIL_COURSE_REQUEST,
    }
}

const actCourseCategorySuccess =(data :Course[]) :Action=>{
    return{
        type:DETAIL_COURSE_SUCCESS,
        payload: data,
    }
}

const actCourseCategoryFail =(error: any):Action=>{
    return{
        type:DETAIL_COURSE_FAIL,
        payload: error,
    }
}
import { COURSELIST_REQUEST,COURSELIST_SUCCESS,COURSELIST_FAIL } from "./contants";
import api from "../../../../../utils/api";
import { Result ,Action ,Course} from "../../../../../type/type";

export const actFetchListCourse =()=>{
    return (dispatch : any)=>{
        dispatch(actListCourseRequest());
         api.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP03")
        .then((res :Result<Course>)=>{
            if(res.status === 200){
                dispatch(actListCourseSuccess(res.data));             
            }               
        })
        .catch((err)=>{
            dispatch(actListCourseFail(err));        
        })
    }
};

const actListCourseRequest =() :Action=>{
    return{
        type:COURSELIST_REQUEST,
    }
}

const actListCourseSuccess =(data :Course[]) :Action=>{
    return{
        type:COURSELIST_SUCCESS,
        payload: data,
    }
}

const actListCourseFail =(error: any):Action=>{
    return{
        type:COURSELIST_FAIL,
        payload: error,
    }
}


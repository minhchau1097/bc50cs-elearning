import { COURSELIST_REQUEST,COURSELIST_SUCCESS,COURSELIST_FAIL } from "./contants";
import api from "../../../../../utils/api";
import { Result ,Action ,Course} from "../../../../../type/type";

export const actFetchListCourse =()=>{
    return async (dispatch : any)=>{
        dispatch(actListCourseRequest());
        await api.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP03")
        .then((res )=>{
            if(res.data.statusCode === 200){
                dispatch(actListCourseSuccess(res.data.content));
                console.log(res.data.content);              
            }               
        })
        .catch((err)=>{
            dispatch(actListCourseFail(err));
            console.log(err.response?.data);
            
        })
    }
};

const actListCourseRequest =() :Action=>{
    return{
        type:COURSELIST_REQUEST,
    }
}

const actListCourseSuccess =(data :any) :Action=>{
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


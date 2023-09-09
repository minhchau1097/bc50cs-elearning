import { PRODUCT_REQUEST,PRODUCT_SUCCESS,PRODUCT_FAIL,EDIT_PRODUCT } from "./contants";
import api from "utils/api";
import { Result,Action, Course} from "type/type";
import { toast  } from 'react-toastify';
import { NavigateFunction } from "react-router";
import { actFetchListCourse } from "page/HomeTemplate/HomePage/CourseList/duck/action";

export const actAddCourse =(formData :any,hinhAnh:any,navigate: NavigateFunction)=>{
    return (dispatch : any)=>{
        dispatch(actCourseRequest());
         api.post("QuanLyKhoaHoc/ThemKhoaHoc",formData,hinhAnh)
        .then((res)=>{
                dispatch(actCourseSuccess(formData));
                dispatch(actUploadHinhAnh(hinhAnh));
                toast.success('Thêm khóa học thành công!');
                navigate('/admin/sanpham', { replace: true })       
        })
        .catch((err)=>{
            toast.error(`Thao tác thất bại! vì ${err.response.data} `);
            dispatch(actCourseFail(err));                  
        })
    }
};

export const actUploadHinhAnh =(hinhAnh :any)=>{
    return (dispatch : any)=>{
        dispatch(actCourseRequest());
         api.post("QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",hinhAnh)
        .then((res)=>{
            if(res.status === 200){
                dispatch(actCourseSuccess(hinhAnh))
            }              
        })
        .catch((err)=>{
            dispatch(actCourseFail(err));                 
        })
    }
};


export const actDeleteCourse =(taiKhoan :string)=>{
    return(dispatch :any)=>{
        dispatch(actCourseRequest());
        api.delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${taiKhoan}`)
        .then((res)=>{
            toast.success('Xóa khóa học thành công!');
            dispatch( actFetchListCourse());
        })
        .catch((error)=>{
            toast.warn(`Không xóa được vì : ${error.response.data}`);
        })
    }
};

export const actFetchEditCourse=  (tenKhoaHoc:any)=>{
    return(dispatch :any)=>{
        dispatch(actCourseRequest());
        api.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP03`)
        .then((res)=>{
            dispatch(actEditCourse(res.data[0]));         
        })  
        .catch((error)=>{
        });
    }
};


export const actUpdateCourse = (formData :any,hinhAnh:any,navigate :NavigateFunction)=>{
    return (dispatch :any)=>{
        api.put("QuanLyKhoaHoc/CapNhatKhoaHoc", formData,hinhAnh)
        .then((res)=>{        
            if(res.status === 200){
                toast.success('Cập nhật thành công!')
                dispatch(actCourseSuccess(formData));
                dispatch(actUploadHinhAnh(hinhAnh));
                dispatch(actFetchEditCourse(null));   
                dispatch(actFetchListCourse());
                navigate("/admin/sanpham");
            }                
        })
        .catch((error)=>{
            toast.warn(`Không update được vì : ${error.response.data}`);
        });
    }
}


const actCourseRequest =() :Action=>{
    return{
        type:PRODUCT_REQUEST,
    }
};

const actCourseSuccess =(data :any) :Action=>{
    return{
        type:PRODUCT_SUCCESS,
        payload: data,
    }
};

const actCourseFail =(error: any):Action=>{
    return{
        type:PRODUCT_FAIL,
        payload: error,
    }
};


const actEditCourse = (course :any)=>{
    return{
        type: EDIT_PRODUCT,
        payload : course,
    };
}
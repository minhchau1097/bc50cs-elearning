import { PRODUCT_REQUEST,PRODUCT_SUCCESS,PRODUCT_FAIL,EDIT_PRODUCT } from "./contants";
import api from "utils/api";
import { Result,Action, Course} from "type/type";
import { toast  } from 'react-toastify';
import { NavigateFunction } from "react-router";
import { actFetchListCourse } from "page/HomeTemplate/HomePage/CourseList/duck/action";

export const actAddCourse =(formData :any,navigate: NavigateFunction)=>{
    return (dispatch : any)=>{
        dispatch(actCourseRequest());
         api.post("QuanLyKhoaHoc/ThemKhoaHoc",formData)
        .then((res)=>{
                dispatch(actCourseSuccess(formData))
                toast.success('Thêm khóa học thành công!');
                console.log(res.data);
                navigate('/admin/sanpham', { replace: true })       
        })
        .catch((err)=>{
            toast.error(`Thao tác thất bại! vì ${err.response.data} `);
            dispatch(actCourseFail(err)); 
            console.log(err);
                   
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
            console.log(error);
            toast.warn(`Không xóa được vì : ${error.response.data}`);
        })
    }
};

export const actFetchEditCourse=  (taiKhoan:any)=>{
    return(dispatch :any)=>{
        dispatch(actCourseRequest());
        api.get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP02&tuKhoa=${taiKhoan}`)
        .then((res)=>{
            console.log(res.data[0]);
            
            dispatch(actEditCourse(res.data[0]))
        })  
        .catch((error)=>{
            console.log(error.response);
        });
    }
};


export const actUpdateCourse = (course : Course,navigate :NavigateFunction)=>{
    return (dispatch :any)=>{
        api.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", course)
        .then((res)=>{        
            if(res.status === 200){
                toast.success('Cập nhật thành công!')
                dispatch(actFetchEditCourse(null));   
                dispatch(actFetchListCourse());
                navigate("/admin/nguoidung");
            }                
        })
        .catch((error)=>{
            toast.warn(`Không update được vì : ${error.response.data}`);
            console.log(error.response);
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
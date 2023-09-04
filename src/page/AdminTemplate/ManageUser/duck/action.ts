import { USER_REQUEST,USER_SUCCESS,USER_FAIL } from "./contants";
import api from "utils/api";
import { Result,Action, User} from "type/type";
import { toast  } from 'react-toastify';
import { NavigateFunction } from "react-router";

export const actFetchListUser =()=>{
    return (dispatch : any)=>{
        dispatch(actUserRequest());
         api.get("QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP02")
        .then((res :Result<User>)=>{
            if(res.status === 200){
                dispatch(actUserSuccess(res.data));             
            }               
        })
        .catch((err)=>{
            dispatch(actUserFail(err));        
        })
    }
};

export const actAddUser =(user :User,navigate: NavigateFunction)=>{
    return (dispatch : any)=>{
        dispatch(actUserRequest());
         api.post("QuanLyNguoiDung/ThemNguoiDung",user)
        .then((res)=>{
            if(res.status === 200){
                toast.success('Thêm người dùng thành công!');
                console.log(res.data);
                navigate('/admin/nguoidung', { replace: true })    
            }       
        })
        .catch((err)=>{
            toast.error('Thao tác thất bại!');
            dispatch(actUserFail(err)); 
            console.log(err);
                   
        })
    }
};

export const actDeleteUser =(taiKhoan :string)=>{
    return(dispatch :any)=>{
        api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
        .then((res)=>{
            alert('Xóa user thành công!');
            dispatch( actFetchListUser());
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}


const actUserRequest =() :Action=>{
    return{
        type:USER_REQUEST,
    }
}

const actUserSuccess =(data :User[]) :Action=>{
    return{
        type:USER_SUCCESS,
        payload: data,
    }
}

const actUserFail =(error: any):Action=>{
    return{
        type:USER_FAIL,
        payload: error,
    }
}
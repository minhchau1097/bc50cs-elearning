
import * as ActionTypes from "./constant";
import api from "utils/api";
import { SignUp, Result, Action, Login, DataAuth, Error, ResultAcount } from "type/type";
import { AppDispatch } from 'store';
import { NavigateFunction } from "react-router";

export const actSignUp = (value: SignUp, navigate: NavigateFunction) => {
    return (dispatch: AppDispatch) => {
        dispatch(actSignUpRequest())
        api.post(`QuanLyNguoiDung/DangKy`, value)
            .then((result: Result<DataAuth>) => {
                if (result.status === 200) {


                    dispatch(actLogin(value, navigate))
                    dispatch(actSignUpSuccess(result.data))
                    alert('Bạn đã đăng ký thành công!')
                    navigate('/', { replace: true })
                }
            })
            .catch((error: string) => {
                dispatch(actSignUpFail(error))
                console.log(error)
            })

    }
}

export const actLogin = (value: Login, navigate: NavigateFunction) => {
    return (dispatch: AppDispatch) => {
        dispatch(actLoginRequest())
        api.post(`QuanLyNguoiDung/DangNhap`, value)
            .then((result: ResultAcount<DataAuth>) => {
                dispatch(actLoginSuccess(result.data))
                let user = result.data.maLoaiNguoiDung
                console.log(user)
                if (user === 'HV') {
                    localStorage.setItem('USER_CUSTOMER', JSON.stringify(result.data))
                    if (window.history.state && window.history.state.idx > 0) {
                       navigate(-1)
                    } else {    
                        navigate('/', { replace: true }); 
                    }

                } else {

                    localStorage.setItem('USER_ADMIN', JSON.stringify(result.data))
                    navigate('/admin/sanpham', { replace: true });

                }
            })
            .catch((error: Error) => {
                dispatch(actLoginFail(error.response?.data))
            })

    }
}


export const actLogOut = (navigate: NavigateFunction) => {
    localStorage.removeItem("USER_ADMIN");
    navigate("/auth", { replace: true });
    return {
        type: ActionTypes.ADMIN_LOGOUT,
    }
};

const actSignUpRequest = () => {
    return {
        type: ActionTypes.SIGNUP_REQUEST

    }
}

const actSignUpSuccess = (data: DataAuth[]) => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS,
        payload: data
    }
}
const actSignUpFail = (error: string) => {
    return {
        type: ActionTypes.SIGNUP_FAIL,
        payload: error
    }
}

const actLoginRequest = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST

    }
}

const actLoginSuccess = (data: DataAuth) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: data
    }
}
const actLoginFail = (error: string) => {
    return {
        type: ActionTypes.LOGIN_FAIL,
        payload: error
    }
}
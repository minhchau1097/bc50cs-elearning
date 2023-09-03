
import * as ActionTypes from "./constant";
import api from "utils/api";
import { SignUp, Result, Action, Login, DataAuth, Error } from "type/type";
import { AppDispatch } from 'store';
import { NavigateFunction } from "react-router";

export const actSignUp = (value: SignUp, navigate: NavigateFunction) => {
    return (dispatch: AppDispatch) => {
        dispatch(actSignUpRequest())
        api.post(`QuanLyNguoiDung/DangKy`, value)
            .then((result:Result<DataAuth>) => {
                if(result.status === 200){

            
                    dispatch(actLogin(value,navigate))
                    dispatch(actSignUpSuccess(result.data))
                    alert('Bạn đã đăng ký thành công!')
                    navigate('/', { replace: true })
                }
            })
            .catch((error:string) => {
                dispatch(actSignUpFail(error))
                console.log(error)
            })

    }
}

export const actLogin = (value: Login, navigate: NavigateFunction) => {
    return (dispatch: AppDispatch) => {
        dispatch(actLoginRequest())
        api.post(`QuanLyNguoiDung/DangNhap`, value)
            .then((result:Result<DataAuth>) => {
                console.log(result)
                dispatch(actLoginSuccess(result.data))
                localStorage.setItem('USER_CUSTOMER', JSON.stringify(result))

                navigate(-1)
            })
            .catch((error:Error) => {
                dispatch(actLoginFail(error.response.data))
                console.log(error)
            })

    }
}

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

const actLoginSuccess = (data: DataAuth[]) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: data
    }
}
const actLoginFail = (error:string) => {
    return {
        type: ActionTypes.LOGIN_FAIL,
        payload: error
    }
}
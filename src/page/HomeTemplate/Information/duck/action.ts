
import * as ActionTypes from "./constant";
import { Action, ResultAcount, DetailUser, RegisterCourse } from "type/type";
import { AppDispatch } from 'store';
import api from "utils/api";
import axios from "axios";
export const actDetailUser = () => {
    return (dispatch: AppDispatch) => {
        dispatch(actDetailUserRequest())
        api.post('QuanLyNguoiDung/ThongTinTaiKhoan')
            .then((result: ResultAcount<DetailUser>) => {
                if (result.status === 200) {
                    dispatch(actDetailUserSuccess(result.data))
                }
            })
            .catch((error: string) => {
                dispatch(actDetailUserFail(error))
            })

    }
}

export const actDeleteCourse = (value: RegisterCourse) => {
    return (dispatch: AppDispatch) => {
        api.post('QuanLyKhoaHoc/HuyGhiDanh', value)
            .then((result) => {
                if (result.status === 200) {
                    dispatch(actDetailUser());
                    alert(result.data);
                }
            })
            .catch((error) => {
                alert(error.response.data);
            })

    }
}

export const actGetPayment = () => {
    return (dispatch: AppDispatch) => {
        axios({
            url: 'https://64709e2a3de51400f7249feb.mockapi.io/thanhToanKhoaHoc',
            method: 'GET'
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }
}

const actDetailUserRequest = (): Action => {
    return {
        type: ActionTypes.DETAIL_REQUEST

    }
}

const actDetailUserSuccess = (data: DetailUser): Action => {
    return {
        type: ActionTypes.DETAIL_SUCCESS,
        payload: data
    }
}
const actDetailUserFail = (error: string): Action => {
    return {
        type: ActionTypes.DETAIL_FAIL,
        payload: error
    }
}
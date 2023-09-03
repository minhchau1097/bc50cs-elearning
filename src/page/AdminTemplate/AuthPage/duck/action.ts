import api from "utils/api";
import { MyValues, Result,Action } from "../type/type";
import { Dispatch } from "redux";

export const actSignUp = (value:MyValues) => {
    return (dispatch:Dispatch) => {
        api.post(`QuanLyNguoiDung/DangKy`,value)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })

    }
}
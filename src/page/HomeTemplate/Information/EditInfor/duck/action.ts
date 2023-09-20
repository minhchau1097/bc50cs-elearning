import React from 'react'
import api from "utils/api";
import { User } from "type/type";
import { AppDispatch } from 'store';
import { NavigateFunction } from "react-router-dom";
import { notification } from "antd";
const [apiNote, contextHolder] = notification.useNotification();
export const actUpdateDetailUser = (user: User, navigate: NavigateFunction) => {
    return (dispatch: AppDispatch) => {
        api.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user)
            .then((result) => {
                if (result.status === 200) {
                    // alert('Cập nhật thành công!')
                    const openNotification = () => {
                        apiNote.info({
                            message: 'Thông báo',
                            description: result.data,
                            placement: 'bottomRight',
                        });
                    
                    };
                    navigate('/thong-tin-ca-nhan', { replace: true })
                }
            })
            .catch((error) => {
                alert('Cập nhật thất bại!')
            })

    }
}

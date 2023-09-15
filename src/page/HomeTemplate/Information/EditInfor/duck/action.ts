
import api from "utils/api";
import { User } from "type/type";
import { AppDispatch } from 'store';
import { NavigateFunction } from "react-router-dom";
export const actUpdateDetailUser = (user: User, navigate: NavigateFunction) => {
    return (dispatch: AppDispatch) => {
        api.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user)
            .then((result) => {
                if (result.status === 200) {
                    alert('Cập nhật thành công!')
                    navigate('/thong-tin-ca-nhan', { replace: true })
                }
            })
            .catch((error) => {
                alert('Cập nhật thất bại!')
            })

    }
}

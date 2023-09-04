export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type SelectEvent = React.ChangeEvent<HTMLSelectElement>;
export interface AppState<T> {
    loading: boolean;
    data: T[] | null;
    error: any;
};

export interface Action {
    type: string;
    payload?: any;
};

export interface Result<T> {
    data: T[];
    status: number;
    statusText: string;
}
export interface Error{
    response:{  
        data: string;
        status: number;
        statusText: string;
    }
}

export interface Course {
    maKhoaHoc: string;
    biDanh: string;
    tenKhoaHoc: string;
    moTa: string;
    luotXem: string;
    hinhAnh: string;
    maNhom: string;
    ngayTao: string;
    soLuongHocVien: string;
    danhMucKhoaHoc: {
        maDanhMucKhoahoc: string;
        tenDanhMucKhoaHoc: string;
    }
}

export interface User{
    taiKhoan : string;
    matKhau : string;
    hoTen : string;
    soDT : string;
    maLoaiNguoiDung : string;
    maNhom : string;
    email : string;
}

export interface Teacher {
    ten: string,
    linhVuc: string,
    ngonNgu: string,
    hinhAnh: string,
    danhGia: number,
    soLuongDanhGia: string,
    id: number | string
}

export interface Date{
    days: undefined | string ,
      hours: undefined | string,
      minutes: undefined | string,
      seconds: undefined | string
}

export interface SignUp {
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    soDT: string;
    maLoaiNguoiDung: string;
    maNhom: string;
    email: string;
}
export interface Login {
    taiKhoan: string;
    matKhau: string;
}

export interface DataAuth {
    taiKhoan: string
    email: string
    soDT: string
    maNhom: string
    maLoaiNguoiDung: string
    hoTen: string
    accessToken: string
}
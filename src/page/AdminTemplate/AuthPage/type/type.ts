export interface MyValues {
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    soDT: string;
    maLoaiNguoiDung: string;
    maNhom: string;
    email: string;
}
export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type SelectEvent = React.ChangeEvent<HTMLSelectElement>;

export interface AppState<T>{
    loading : boolean;
    data: T[] | null;
    error : any;
};

export interface Action{
    type: string;
    payload? : any;
};

export interface Response<T>{
    statusCode: number;
    message: string;
    content: T[];
}

export interface Result<T>{
    data : Response<T>;
    status: number;
    statusText: string;
}

export interface AppState<T>{
    loading : boolean;
    data: T[] | null;
    error : any;
};

export interface Action{
    type: string;
    payload? : any;
};

export interface Result<T>{
    data : T[];
    status: number;
    statusText: string;
}

export interface Course{
    maKhoaHoc : string;
    biDanh : string;
    tenKhoaHoc : string;
    moTa : string;
    luotXem: string;
    hinhAnh : string;
    maNhom: string;
    ngayTao: string;
    soLuongHocVien: string;
    danhMucKhoaHoc:{
        maDanhMucKhoahoc: string;
        tenDanhMucKhoaHoc: string;
    }
}
import React, { Fragment, useEffect,useState } from 'react';
import { Table,Input  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../../store';
import { actDeleteUser, actFetchListUser } from './duck/action';
import {useAppDispatch} from "../../../store/type"
import { User } from 'type/type';


const { Search } = Input;


export default function ListUser() {

  const arrUser = useSelector((state :RootState)=>state.userReducer.data);
  const dispatch  = useAppDispatch();
  
const onSearch = (value :any) =>{
  console.log(value);

  // dispatch(actFetchListUser(value));
 };

  useEffect(()=>{
    dispatch(actFetchListUser());
    // dispatch(actFetchEditFilm())
  },[])


  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      value:(text: any,object: any)=>{return <span>{text}</span>},

      sorter: (a : any, b: any) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if(taiKhoanA > taiKhoanB){
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend','ascend'],
      width: '15%',

    },
    
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      sorter: (a : any, b: any) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if(hoTenA > hoTenB){
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend','ascend'],
      width: '15%',
      
    },

    {
      title: 'Email',
      dataIndex: 'email',
      width: '15%',
    },

    {
      title: 'Số Điện Thoại',
      dataIndex: 'soDt',
      width: '15%',
    },

    {
      title: 'Loại Người Dùng',
      dataIndex: 'tenLoaiNguoiDung',
      sorter: (a : any, b: any) => {
        let tenLoaiNguoiDungA = a.tenLoaiNguoiDung.toLowerCase().trim();
        let tenLoaiNguoiDungB = b.tenLoaiNguoiDung.toLowerCase().trim();
        if(tenLoaiNguoiDungA > tenLoaiNguoiDungB){
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend','ascend'],
      width: '15%',
    },

  

    {
      title: 'Tùy Chỉnh',
      dataIndex: 'tuyChinh',
      render:(text :any,user :User)=>{
        return  <Fragment>
          {/* <NavLink to={`/admin/edit-film/${user.maPhim}`}>
            <button className='btn btn-info'>Sửa</button>
          </NavLink> */}

            <button className='btn btn-danger'
            onClick={()=>{
              if(window.confirm(`Chắc là muốn đưa "${user.taiKhoan}" ra đảo dữ chưa??? `)){
                  dispatch(actDeleteUser(user.taiKhoan))
              }
            }}
            >Xóa</button>

        </Fragment>
      },
      width: '25%',
    },
  ];
  const data = arrUser;

  const onChange = (pagination : any, filters: any, sorter: any, extra: any) => {
    // console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <div className='container'>
      <h1 className='text-warning text-center'>Danh Sách Người Dùng</h1>
      <NavLink to="/admin/them-nguoidung">
        <button className='btn btn-success mb-2'>Thêm Người Dùng</button>
      </NavLink>
      
      <Search
            className='mb-2'
            placeholder="Tìm kiếm Người Dùng"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"}/>
    </div>
  )
}


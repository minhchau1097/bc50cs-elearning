import React, { Fragment, useEffect,useState } from 'react';
import { Table,Input  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../../store';
import { actFetchListCourse } from '../../HomeTemplate/HomePage/CourseList/duck/action';
// import { actFetchEditFilm ,actDeleteFilm} from '../AddFilm/duck/action';


const { Search } = Input;


export default function ListUser() {

  const arrUser = useSelector((state :RootState)=>state.courseListReducer.data);
  const dispatch :any= useDispatch();
  
const onSearch = (value :any) =>{
  console.log(value);

  dispatch(actFetchListCourse(value));
 };

  useEffect(()=>{
    dispatch(actFetchListCourse());
    // dispatch(actFetchEditFilm())
  },[])


  const columns = [
    {
      title: 'Mã Khóa Học',
      dataIndex: 'maKhoaHoc',
      value:(text: any,object: any)=>{return <span>{text}</span>},

      sorter: (a : any, b: any) => {
        let maKhoaHocA = a.maKhoaHoc.toLowerCase().trim();
        let maKhoaHocB = b.maKhoaHoc.toLowerCase().trim();
        if(maKhoaHocA > maKhoaHocB){
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend'],
      width: '15%',

    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      render: (text: any,course: any)=>{
        return <Fragment>
          <img src={course.hinhAnh} alt={course.tenPhim} width={50} height={50}
          onError={(e)=>{e.target.onError = null; e.target.src="http://ddcinema.vn/Content/Img/logo.png"}}
          />
        </Fragment>
      },
      width: '15%',
    },
    {
      title: 'Tên Khóa Học',
      dataIndex: 'tenKhoaHoc',
      sorter: (a : any, b: any) => {
        let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
        let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
        if(tenKhoaHocA > tenKhoaHocB){
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend'],
      width: '25%',
      
    },

    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      render:(text :any,course :any)=>{
        return  <Fragment>
          {course.moTa.length > 50 ? course.moTa.substr(0,50) + '...' : course.moTa}
        </Fragment>
      },
      width: '25%',
    },

    {
      title: 'Tùy Chỉnh',
      dataIndex: 'tuyChinh',
      render:(text :any,course :any)=>{
        return  <Fragment>
          {/* <NavLink to={`/admin/edit-film/${film.maPhim}`}>
            <button className='btn btn-info'>Sửa</button>
          </NavLink>

            <button className='btn btn-danger'
            onClick={()=>{
              if(window.confirm(`Chắc là muốn xóa phim "${film.tenPhim}" dữ chưa??? `)){
                  dispatch(actDeleteFilm(film.maPhim))
              }
            }}
            >Xóa</button>

            <NavLink to={`/admin/add-show-time/${film.maPhim}`}>
              <button className='btn btn-warning'>Thêm lịch chiếu</button>
            </NavLink> */}

        </Fragment>
      },
      width: '25%',
    },
  ];
  const data = arrUser;

  const onChange = (pagination : any, filters: any, sorter: any, extra: any) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <div className='container'>
      <h1 className='text-warning text-center'>Quản Lý Khóa Học</h1>
      <NavLink to="/admin/them-sanpham">
        <button className='btn btn-success mb-2'>Thêm Khóa Học</button>
      </NavLink>
      
      <Search
            className='mb-2'
            placeholder="Tìm kiếm phim"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"}/>
    </div>
  )
}


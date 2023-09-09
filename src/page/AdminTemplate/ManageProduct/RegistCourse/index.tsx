import { Fragment, useEffect } from 'react';
import { Table  } from 'antd';
import {  useSelector } from 'react-redux';
import { useAppDispatch } from 'store/type';
import { RootState } from 'store';
import { actFetchRegistCourse } from '../duck/action';
import {useParams} from "react-router-dom"

export default function RegistCourse() {

    const arrCourse = useSelector((state :RootState)=>state.productReducer.data);
    const dispatch = useAppDispatch();
    const param = useParams();
    console.log(arrCourse);
  
    useEffect(()=>{
      dispatch(actFetchRegistCourse(param.id));
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
          title: 'Tùy Chỉnh',
          dataIndex: 'tuyChinh',
          render:(text :any,course :any)=>{
            return  <Fragment>
{/*     
              <NavLink to={`/admin/ghidanh-sanpham/${course.tenKhoaHoc}`}>
                <button className='btn btn-warning'>Ghi Danh</button>
              </NavLink>
              <NavLink to={`/admin/chinhsua-sanpham/${course.tenKhoaHoc}`}>
                <button className='btn btn-info'>Sửa</button>
              </NavLink>
    
                <button className='btn btn-danger'
                onClick={()=>{
                  if(window.confirm(`Chắc là muốn xóa phim "${course.maKhoaHoc}" dữ chưa??? `)){
                      dispatch(actDeleteCourse(course.maKhoaHoc))
                  }
                }}
                >Xóa</button> */}
    
    
            </Fragment>
          },
          width: '25%',
        },
      ];
      const data =arrCourse? arrCourse : [];
    
      const onChange = (pagination : any, filters: any, sorter: any, extra: any) => {
        
      };
  return (
    <div className='container'>
    <h1 className='text-warning text-center'>Quản Lý Khóa Học</h1>
    <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maKhoaHoc"}/>
  </div>
  )
}

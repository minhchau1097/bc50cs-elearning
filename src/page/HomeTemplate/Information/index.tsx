
import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/type'
import { actDeleteCourse, actDetailUser } from './duck/action';
import { DetailCourse, DetailUser, RegisterCourse } from 'type/type';
import { Modal, Table } from 'antd';

import { Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@mui/material';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

export default function Information() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { data, loading, error } = useAppSelector(state => state.detailUserReducer);
    useEffect(() => {
        dispatch(actDetailUser())

    }, [])
    const renderCourse = () => {
        if (data?.chiTietKhoaHocGhiDanh.length === 0) {
            return < >
                <div className='text-center w-full h-full'>

                    <h3>Bạn chưa đăng ký khoá học </h3>
                    <Link to={'/danhmuckhoahoc'} replace={false}>Tham khảo các khoá học tại đây</Link>
                </div>
            </>
        } else {


            return data?.chiTietKhoaHocGhiDanh.map((item: DetailCourse, index) => {
                let value: RegisterCourse = { taiKhoan: data?.taiKhoan, maKhoaHoc: item.maKhoaHoc }
                return <SwiperSlide key={index} className='text-center' >
                    <div className='slider-content xs:mx-auto md:ml-3 w-5/6 rounded-md transition-all py-4 flex flex-col items-center'>
                        <div>
                            <img className='w-[200px] h-[200px] object-fill' src={item.hinhAnh} alt="logo" />
                        </div>
                        <div>
                            <h6 className='font-medium mb-1'>{item.tenKhoaHoc}</h6>
                            <p>{item.moTa.length > 30 ? item.moTa.substr(0, 30) + '...' : item.moTa}</p>
                            <div className='flex justify-center items-center'>
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly ></Rating>
                                <span className='text-yellow-300 font-medium'>{item.danhGia}</span>
                            </div>
                            <span className='text-xs text-gray-400'>{item.luotXem}</span>
                        </div>
                        <button className='bg-red-500 p-2 rounded-lg text-white hover:bg-red-600' onClick={() => {
                            dispatch(actDeleteCourse(value))
                        }}>Huỷ đăng ký</button>
                    </div>
                </SwiperSlide>
            })
        }
    }


    // return (

    //     // renderInfor()

    // )
    return (
        <section className='infor-user' style={{ backgroundColor: '#eee', minHeight: '100vh' }}>
            <div className="px-[50px] py-5">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className=" mb-4">
                            <ol className="breadcrumb mb-0 bg-light  p-3 rounded-[8px]" >
                                <li className="breadcrumb-item"><Link to={'/'}>Trang chủ</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Thông tin cá nhân</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4 rounded-[8px]" >
                            <div className="card-body text-center">
                                <div >

                                    <span className='text-white bg-[#f6ba35] rounded-full w-16 h-16 leading-[64px] uppercase font-semibold text-[24px] inline-block'> {data?.hoTen.slice(0, 1)}</span>
                                    <h5 className="my-3">{data?.hoTen}</h5>
                                    <p className="text-muted mb-1">{data?.soDT}</p>
                                    <p className="text-muted mb-4">{data?.email}</p>
                                </div>

                                <div className="d-flex justify-content-center mb-2">
                                    <button className="btn btn-primary flex" onClick={() => {
                                        navigate('/thong-tin-ca-nhan/chinh-sua', { replace: true })
                                    }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0 rounded-[8px]" >
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush  rounded-[8px]" >
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning" />
                                        <p className="mb-0">https://elearning.com</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                                        <p className="mb-0">E-Learning</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                                        <p className="mb-0">E-Learning</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                                        <p className="mb-0">E-Learning</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                                        <p className="mb-0">E-Learning</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4 rounded-[8px]" >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Họ và tên</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.hoTen}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Số điện thoại</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.soDT}</p>
                                    </div>
                                </div>


                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mã nhóm </p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.maNhom}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* <div className="col-md-6">
                                <div className="card mb-4 mb-md-0 rounded-[8px]">
                                    <div className="card-body">
                                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                        <div className="progress rounded mb-2" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0 rounded-[8px]">
                                    <div className="card-body">
                                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                        <div className="progress rounded mb-2" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-12">
                                <Swiper
                                    className='mt-4  rounded-[8px] bg-white border-[rgba(0,0,0,.125)] border'
                                    spaceBetween={2}
                                    breakpoints={{
                                        400: {
                                            slidesPerView: 1
                                        },
                                        640: {
                                            slidesPerView: 2
                                        },
                                        768: {
                                            slidesPerView: 1
                                        },
                                        1024: {
                                            slidesPerView: 1
                                        },
                                        1200: {
                                            slidesPerView: 2
                                        }

                                    }}
                                    grid={{
                                        rows: 1,
                                        fill: 'column',

                                    }}
                                    pagination={{
                                        clickable: true,

                                    }}
                                    modules={[Pagination, Grid]}
                                >

                                    {renderCourse()}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

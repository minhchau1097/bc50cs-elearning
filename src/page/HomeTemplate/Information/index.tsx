
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/type'
import { actDeleteCourse, actDetailUser, actGetPayment } from './duck/action';
import { Animate, DetailCourse, RegisterCourse } from 'type/type';
import { Progress, Tabs, ConfigProvider, Breadcrumb, Empty } from 'antd';
import type { TabsProps } from 'antd';
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
    const [state, setState] = useState<Animate>({
        html: 0,
        css: 0,
        js: 0,
        react: 0
    });
    useEffect(() => {
        dispatch(actDetailUser())
        dispatch(actGetPayment())
        let count: number = 0;
        const animate = setInterval(() => {
            if (count < 100) {
                count++
                setState({
                    html: count,
                    css: count - 20,
                    js: count - 30,
                    react: count - 22
                })
            } else {
                clearInterval(animate)
            }
        }, 30)
    }, [])
    const conicColors = { '0%': '#108ee9', '100%': '#87d068' };
    const renderCourse = () => {
        if (data?.chiTietKhoaHocGhiDanh.length === 0) {
            return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} imageStyle={{ minHeight: 200 }} />
       
        } else {


            return data?.chiTietKhoaHocGhiDanh.map((item: DetailCourse, index) => {
                let value: RegisterCourse = { taiKhoan: data?.taiKhoan, maKhoaHoc: item.maKhoaHoc }
                return <SwiperSlide key={index} className='text-center' >
                    <div className='slider-content xs:mx-auto md:ml-3 w-5/6 rounded-md transition-all py-4 flex flex-col lg:flex-row lg:mb-[20px]  gap-6'>
                        <div>
                            <img className='w-[400px] h-[250px] object-cover rounded-[8px]' src={item.hinhAnh} onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = 'https://www.makeforum.org/wp-content/uploads/2021/04/ngon-ngu-lap-trinh-850x415.png';
                            }} alt="logo" />
                        </div>
                        <div className=' text-left'>
                            <h6 className='font-medium mb-2 text-[22px]'>{item.tenKhoaHoc}</h6>
                            <p className='text-gray-400 mb-2'>{item.moTa.length > 30 ? item.moTa.substr(0, 100) + '...' : item.moTa}</p>
                            <div className='flex gap-2 items-center mb-2    '>

                                <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#f5c002] w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    8 giờ
                                </div>
                                <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#f06f68] w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>

                                    23 giờ
                                </div>
                                <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#65c9ff] w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                    </svg>

                                    All level
                                </div>

                            </div>
                            <div className='mb-2'>
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly ></Rating>
                            </div>
                            <button className='bg-red-500 p-2 rounded-lg text-white hover:bg-red-600' onClick={() => {
                                dispatch(actDeleteCourse(value))
                            }}>Huỷ đăng ký</button>
                            <button className='bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600 ml-2' onClick={() => {

                            }}>Thanh toán</button>
                        </div>

                    </div>
                </SwiperSlide>
            })
        }
    }
    const onChange = (key: string) => {
        console.log(key);
    };
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Khoá học của bạn',
            children: <Swiper

                spaceBetween={2}
                breakpoints={{
                    400: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 1
                    },
                    1200: {
                        slidesPerView: 1
                    }

                }}
                grid={{
                    rows: 1,


                }}
                pagination={{
                    clickable: true,

                }}
                modules={[Pagination, Grid]}
            >

                {renderCourse()}
            </Swiper>,
        },
        {
            key: '2',
            label: 'Lịch sử thanh toán khoá học',
            children: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} imageStyle={{ minHeight: 200 }} />,
        },

    ];
    return (
        <section className='infor-user space-y-2'>
            <div className="px-[50px] py-5">
                <Breadcrumb className='p-2 card-blur mb-4'
                    items={[
                        {
                            title:
                                <Link to={'/'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg></Link>
                            ,
                        },
                        {
                            title: (
                                <>
                                    <div className='flex  items-center'>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <span>Thông tin cá nhân</span>

                                    </div>
                                </>
                            ),
                        },
                    ]}
                />
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card card-blur mb-4 rounded-[8px]" >
                            <div className="card-body text-center">
                                <div >

                                    <span className='text-white bg-[#f6ba35] rounded-full w-16 h-16 leading-[64px] uppercase font-semibold text-[24px] inline-block'> {data?.hoTen.slice(0, 1)}</span>
                                    <h5 className="my-3">{data?.hoTen}</h5>
                                    <p className="text-muted mb-1">{data?.soDT}</p>
                                    <p className="text-muted mb-4">{data?.email}</p>
                                </div>

                                <div className="d-flex justify-content-center mb-2">
                                    <button className="btn btn-primary flex" onClick={() => {
                                        navigate('/thong-tin-ca-nhan/chinh-sua', { replace: false })
                                    }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-blur mb-4 mb-lg-0 rounded-[8px]" >
                            <div className="card-body md:p-5 max-sm:p-4 progress-custom">
                                <div className='flex justify-between xs:flex-wrap xs: gap-6 xs:justify-center  max-[400px]:flex-wrap max-[400px]:gap-6  max-[400px]:justify-center'>
                                    <Progress size={80} format={() => <span className='text-[14px] max-sm:text-[12px] font-medium text-black'>HTML</span>} className='' type="circle" percent={state.html} strokeColor={conicColors} />
                                    <Progress size={80} format={() => <span className='text-[14px] max-sm:text-[12px] font-medium text-black'>CSS</span>} className='' type="circle" percent={state.css} strokeColor={conicColors} />
                                    <Progress size={80} format={() => <span className='text-[14px] max-sm:text-[12px] font-medium text-black'>Javascript</span>} className='' type="circle" percent={state.js} strokeColor={conicColors} />
                                    <Progress size={80} format={() => <span className='text-[14px] max-sm:text-[12px] font-medium text-black'>React</span>} className='' type="circle" percent={state.react} strokeColor={conicColors} />


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card card-blur mb-4 rounded-[8px]" >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Tài khoản </p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.taiKhoan}</p>
                                    </div>
                                </div>
                                <hr />
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
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Đối tượng</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Học viên</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-12 ">
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Tabs: {
                                                inkBarColor: '#f6ba35',
                                                itemSelectedColor: '#f6ba35',
                                                itemHoverColor: '#f6ba35'
                                            },
                                        },
                                    }}
                                >
                                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='card-blur px-2 rounded-[8px]' />
                                </ConfigProvider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

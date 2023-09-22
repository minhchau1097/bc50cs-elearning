
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/type'
import { actDetailUser, actGetPayment } from './duck/action';
import { DetailCourse, RegisterCourse } from 'type/type';
import { Tabs, ConfigProvider, Breadcrumb, Empty } from 'antd';
import type { TabsProps } from 'antd';
import { Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import SwiperItem from './SwiperItem';
import CardItem from './CardItem';
import TitleItem from './TitleItem';

export default function Information() {
    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector(state => state.detailUserReducer);

    useEffect(() => {
        dispatch(actDetailUser())
        dispatch(actGetPayment())

    }, [])

    const renderCourse = () => {
        if (data?.chiTietKhoaHocGhiDanh.length === 0) {
            return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} imageStyle={{ minHeight: 200 }} />

        } else {
            return data?.chiTietKhoaHocGhiDanh.map((item: DetailCourse, index) => {
                let value: RegisterCourse = { taiKhoan: data?.taiKhoan, maKhoaHoc: item.maKhoaHoc }
                return <SwiperSlide className='text-center'>
                    <SwiperItem item={item} key={index} value={value} />
                </SwiperSlide>
            })
        }
    }

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
                        <CardItem item={data} />
                    </div>
                    <div className="col-lg-8">
                        <TitleItem item={data} />
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
                                    <Tabs defaultActiveKey="1" items={items} className='card-blur px-2 rounded-[8px]' />
                                </ConfigProvider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

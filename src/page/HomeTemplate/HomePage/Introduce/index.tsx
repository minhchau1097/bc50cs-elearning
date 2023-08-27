import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import axios from 'axios';
import { Rating } from '@mui/material';


export default function Introduce() {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://64709e3a3de51400f724a087.mockapi.io/Teacher',
            method: 'GET',
        })
            .then((result) => {
                setState(result.data)
            })
            .catch((error) => {

            })
    }, [])
    const renderSlide = () => {
        return state?.map((item: Teacher, index) => {
            return <SwiperSlide key={index} className='text-center' >
                <div className='slider-content ml-3 w-5/6 rounded-md transition-all py-4'>
                    <div>
                        <img src={item.hinhAnh} alt="logo" />
                        <h6>{item.ten}</h6>
                    </div>
                    <div>
                        <p>{item.linhVuc}</p>
                        <p>{item.ngonNgu}</p>
                        <div className='flex justify-center'>
                            <Rating name="half-rating-read" defaultValue={5} precision={0.5}  readOnly ></Rating>
                            <span>{item.danhGia}</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        })
    }
    return (
        <div className='bg-white'>

            <div className='px-12 '>
                <div className='introduce'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={6}

                        grid={{
                            rows: 1,

                        }}
                        pagination={{
                            clickable: true,

                        }}
                        modules={[Pagination, Grid]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='mySwiper mb-52 '
                    >
                        {renderSlide()}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

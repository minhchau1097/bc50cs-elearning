import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/type';
import { actDetailUser } from '../Information/duck/action';
import { DetailCourse } from 'type/type';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import Payment from '../Payment';

export default function Cart() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.detailUserReducer);
    useEffect(() => {
        if (localStorage.getItem('USER_CUSTOMER')) {
            // dispatch(actDetailUser())
        }
    }, [])
    const renderCart = () => {
        return data?.chiTietKhoaHocGhiDanh.map((item: DetailCourse, index) => {
            return <div className=' flex py-[24px]  border-t-[1px]' key={index}>
                <div className='w-[100px] h-[100px]'>
                    <img className='w-full h-full object-fill' src={item.hinhAnh} alt="logo" onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = 'https://www.makeforum.org/wp-content/uploads/2021/04/ngon-ngu-lap-trinh-850x415.png';
                    }} />
                </div>
                <div className='ml-3'>
                    <h3>{item.tenKhoaHoc}</h3>
                    <p>{item.danhGia}</p>
                    <div className='mb-2'>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly ></Rating>
                    </div>
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
                </div>

            </div>
        })
    }
    return (
        <div className='px-[50px]'>
            <h1>Thông tin giỏ hàng</h1>
            <div className='flex mt-5'>


                <div className='w-3/5'>
                    <p> Có n khoá học trong giỏ hàng</p>
                    <div >
                        {renderCart()}
                    </div>
                </div>
                <div className='w-2/5 ml-[32px]'>
                    <p>Tổng cộng: </p>
                    <h3 className='font-semibold text-[24px]'>2.000.000đ</h3>
                    <Payment />
                </div>
            </div>
        </div>
    )
}

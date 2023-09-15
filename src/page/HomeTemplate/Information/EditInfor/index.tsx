import { FormikProps, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/type';
import { DetailUser, InputEvent, SelectEvent, User } from 'type/type';
import * as Yup from "yup";
import { actDetailUser } from '../duck/action';
import { actUpdateDetailUser } from './duck/action';
export default function EditInfor() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { data, loading, error } = useAppSelector(state => state.detailUserReducer);
    const [status, setStatus] = useState<boolean>(false);
    useEffect(() => {
        dispatch(actDetailUser())
    }, [])
    const formik: FormikProps<User> = useFormik<User>({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: data?.taiKhoan || '',
            matKhau: data?.matKhau || '',
            hoTen: data?.hoTen || '',
            soDT: data?.soDT || '',
            maLoaiNguoiDung: data?.maLoaiNguoiDung || '',
            maNhom: data?.maNhom || '',
            email: data?.email || '',
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Vui lòng không để trống').min(5, 'Tối thiểu 5 ký tự'),
            matKhau: Yup.string().required('Vui lòng không để trống').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Tối thiểu 8 ký tự, ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt'),
            hoTen: Yup.string().required('Vui lòng không để trống').min(5, 'Tối thiểu 5 ký tự'),
            email: Yup.string().required('Vui lòng không để trống'),
            soDT: Yup.string()
                .required('Vui lòng không để trống').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Số điện thoại không hợp lệ'),
        }),
        onSubmit: (values) => {

            console.log(values)
            dispatch(actUpdateDetailUser(values, navigate))

        }
    });

    return (
        <section className='infor-user' style={{ backgroundColor: '#eee', minHeight: '100vh' }}>
            <div className="px-[50px] py-5">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className=" mb-4">
                            <ol className="breadcrumb mb-0 bg-light  p-3 rounded-[8px]" >
                                <li className="breadcrumb-item font-semibold"><Link to={'/'}>Trang chủ</Link></li>
                                <li className="breadcrumb-item "><Link to={'/thong-tin-ca-nhan'}>Thông tin cá nhân</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Chỉnh sửa</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* <div className="row"> */}
                <div className="col-12">
                    {/* <form
                            onSubmitCapture={formik.handleSubmit}
                            action="#" className="w-4/5  mx-auto p-6">
                            <div className='w-1/2 mx-auto'>
                                <div className={`text-black bg-white w-full max-w-[380px]  ${formik.errors.taiKhoan && ('border-[1px]  border-[rgba(240,23,23,.835)]')}`}>
                                    <input onChange={handleOnchange} name='taiKhoan' type="text" placeholder="Tài khoản" />
                                </div>
                                {formik.errors.taiKhoan && formik.touched.taiKhoan && (<div className='max-w-[380px] w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.taiKhoan}</p>
                                </div>)}

                                <div className={`text-black bg-white w-full max-w-[380px]  ${formik.errors.matKhau && ('border-[1px]  border-[rgba(240,23,23,.835)]')}`}>
                                    <input onChange={handleOnchange} name='matKhau' type="password" placeholder="Mật khẩu" />

                                </div>
                                {formik.errors.matKhau && formik.touched.matKhau && (<div className='max-w-[380px] w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.matKhau}</p>
                                </div>)}
                                <div className={`text-black bg-white w-full max-w-[380px]  ${formik.errors.hoTen && ('border-[1px]  border-[rgba(240,23,23,.835)]')}`}>

                                    <input onChange={handleOnchange} name='hoTen' type="text" placeholder="Họ và tên" />
                                </div>
                                {formik.errors.hoTen && formik.touched.hoTen && (<div className='max-w-[380px] w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.hoTen}</p>
                                </div>)}
                                <div className={`text-black bg-white w-full max-w-[380px]  ${formik.errors.soDT && ('border-[1px]  border-[rgba(240,23,23,.835)]')}`}>

                                    <input onChange={handleOnchange} name='soDT' type="text" placeholder="Số điện thoại" />

                                </div>
                                {formik.errors.soDT && formik.touched.soDT && (<div className='max-w-[380px] w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.soDT}</p>
                                </div>)}

                                <div className={`text-black bg-white w-full max-w-[380px]  ${formik.errors.email && ('border-[1px]  border-[rgba(240,23,23,.835)]')}`}>

                                    <input onChange={handleOnchange} name='email' type="email" placeholder="Email" />
                                </div>
                                {formik.errors.email && formik.touched.email && (<div className='max-w-[380px] w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.email}</p>
                                </div>)}
                                <div className="text-black bg-white w-full max-w-[380px] overflow-hidden">
                                    <select onChange={handleOnchange} name='maNhom' className=' w-full h-full bg-[#f0f0f0] text-[#000] font-semibold' placeholder="Mã nhóm" >
                                        <option value="GP01">GP01</option>
                                        <option value="GP02">GP02</option>
                                        <option value="GP03">GP03</option>
                                        <option value="GP04">GP04</option>
                                        <option value="GP05">GP05</option>
                                        <option value="GP06">GP06</option>
                                        <option value="GP07">GP07</option>
                                        <option value="GP08">GP08</option>
                                        <option value="GP09">GP09</option>
                                    </select>
                                </div>
                                <div className='flex justify-between items-center max-w-[380px] w-full'>

                                    <NavLink className='btnAuth btn-home ' to={'/'} >Trang chủ</NavLink>
                                    <input type="submit" className="btnAuth" defaultValue="Sign up" />
                                </div>
                                <p className="social-text">Đăng nhập bằng nền tảng xã hội</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google" />
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                        </form> */}
                </div>
                {/* </div> */}
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16 bg-white rounded-[8px]">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white text-center">Chỉnh sửa thông tin</h2>
                    <form action="#" onSubmitCapture={formik.handleSubmit}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tài khoản</label>
                                <input type="text" name="taiKhoan" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5  cursor-no-drop" value={formik.values.taiKhoan} disabled />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã nhóm</label>
                                <select name='maNhom' className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 cursor-no-drop " disabled value={formik.values.maNhom} >
                                    <option value="GP01">GP01</option>
                                    <option value="GP02">GP02</option>
                                    <option value="GP03">GP03</option>
                                    <option value="GP04">GP04</option>
                                    <option value="GP05">GP05</option>
                                    <option value="GP06">GP06</option>
                                    <option value="GP07">GP07</option>
                                    <option value="GP08">GP08</option>
                                    <option value="GP09">GP09</option>
                                </select>
                            </div>
                            <div className="w-full relative">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                                <input type={!status ? 'password' : 'text'} name="matKhau" className={`bg-gray-50 border-[1px] border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 ${formik.errors.matKhau && formik.touched.matKhau && ('  !border-[rgba(240,23,23,.835)]')}`} value={formik.values.matKhau} onChange={formik.handleChange} />
                                {formik.errors.matKhau && formik.touched.matKhau && (<div className=' w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.matKhau}</p>
                                </div>)}
                                {!status && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-[6px] top-9 transition-opacity delay-150" onClick={() => {
                                    setStatus(true)
                                }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>)}
                                {status && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-[6px] top-9 transition-opacity delay-150" onClick={() => {
                                    setStatus(false)
                                }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>)}


                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ tên</label>
                                <input type="text" name="hoTen" className={`bg-gray-50 border-[1px] border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 ${formik.errors.hoTen && formik.touched.hoTen && ('  !border-[rgba(240,23,23,.835)]')}`} value={formik.values.hoTen} onChange={formik.handleChange} />
                                {formik.errors.hoTen && formik.touched.hoTen && (<div className=' w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.hoTen}</p>
                                </div>)}
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                                <input type="text" name="soDT" className={`bg-gray-50 border-[1px] border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 ${formik.errors.soDT && formik.touched.soDT && ('  !border-[rgba(240,23,23,.835)]')}`} value={formik.values.soDT} onChange={formik.handleChange} />
                                {formik.errors.soDT && formik.touched.soDT && (<div className=' w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.soDT}</p>
                                </div>)}
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" className={`bg-gray-50 border-[1px] border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 ${formik.errors.email && formik.touched.email && ('  !border-[rgba(240,23,23,.835)]')}`} value={formik.values.email} onChange={formik.handleChange} />
                                {formik.errors.email && formik.touched.email && (<div className=' w-full text-[rgba(240,23,23,.835)]'>
                                    <p>{formik.errors.email}</p>
                                </div>)}
                            </div>

                        </div>
                        <div className="flex items-center space-x-4">
                            <button type='button' className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-[20px] py-[10px] text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={() => {
                                navigate('/thong-tin-ca-nhan', { replace: true })
                            }}>
                                Quay lại
                            </button>
                            <button type="submit" className="text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-[20px] py-[10px] text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900" >
                                Cập nhật
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

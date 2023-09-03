import React, { useState } from 'react'
import { useFormik, FormikProps } from 'formik';
import { Form } from 'antd';
import { SignUp, SelectEvent, InputEvent, Login } from 'type/type';
import { actLogin, actSignUp } from './duck/action';
import { useAppDispatch, useAppSelector } from 'store/type';
import { NavigateFunction, useNavigate } from 'react-router';

export default function AuthPage() {
  const navigate:NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.authReducer);
  const [status, setStatus] = useState(false);
  const formik: FormikProps<SignUp> = useFormik<SignUp>({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      soDT: '',
      maLoaiNguoiDung: 'HV',
      maNhom: '1',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(actSignUp(values,navigate))
    }
  });
  const formikLogin: FormikProps<Login> = useFormik<Login>({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
     
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(actLogin(values,navigate))
    }
  });
  const handleOnchange = (e: InputEvent | SelectEvent) => {
    const { name, value } = e.target
    formik.setFieldValue(name, value)
  }
  const handleChangeLogin=(e: InputEvent | SelectEvent)=>{
    const { name, value } = e.target
    formikLogin.setFieldValue(name, value)
  }
  return (
    <div>
      <div className={`containerAuth ${status ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <Form onSubmitCapture={formikLogin.handleSubmit}
            action="#" className="sign-in-form">
              <h2 className="title">Đăng nhập</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input name='taiKhoan' onChange={handleChangeLogin} type="text" placeholder="Tài khoản" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input name='matKhau' onChange={handleChangeLogin} type="password" placeholder="Mật khẩu" />
              </div>
              <div className='bg-[#f8d7da] text-[#721c24] w-full max-w-[380px] rounded-[5px] text-center p-1' style={{display:`${state.logIn.error ? 'block': 'none'}`}}>
                <p>{state?.logIn.error}</p>
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" />
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
            </Form>
            <Form
              onSubmitCapture={formik.handleSubmit}
             
              layout="horizontal"
              action="#" className="sign-up-form">
              <h2 className="title">Đăng ký</h2>
              <div className="input-field input-sign-up">
                <input onChange={handleOnchange} name='taiKhoan' type="text" placeholder="Tài khoản" />
              </div>
              <div className='max-w-[380px] w-full text-[rgba(240,23,23,.835)]'>
                <p></p>
              </div>
              <div className="input-field input-sign-up">
                <input onChange={handleOnchange} name='matKhau' type="password" placeholder="Mật khẩu" />
              </div>
              <div className="input-field input-sign-up">

                <input onChange={handleOnchange} name='hoTen' type="text" placeholder="Họ và tên" />
              </div>
              <div className="input-field input-sign-up">

                <input onChange={handleOnchange} name='soDT' type="text" placeholder="Số điện thoại" />
              </div>
              <div className="input-field input-sign-up">

                <input onChange={handleOnchange} name='email' type="email" placeholder="Email" />
              </div>
              <div className="input-field input-sign-up overflow-hidden">
                <select onChange={handleOnchange} name='maNhom' className='absolute left-0 w-full h-full bg-[#f0f0f0] text-[#000] font-semibold' placeholder="Mã nhóm" >
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
              <input type="submit" className="btn" defaultValue="Sign up" />
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
            </Form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Xin chào!</h3>
              <p>
                Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={() => {
                setStatus(true)
              }}>
                ĐĂNG KÝ
              </button>
            </div>
            <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Chào mừng bạn đã trở lại!</h3>
              <p>
                Vui lòng đăng nhập để kết nối với tài khoản của bạn


              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={() => {
                setStatus(false)
              }}>
                ĐĂNG NHẬP
              </button>
            </div>
            <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" />
          </div>
        </div>
      </div>
    </div>

  )
}

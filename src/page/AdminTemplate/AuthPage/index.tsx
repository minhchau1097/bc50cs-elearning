import React, { useState } from 'react'
import { useFormik, FormikProps } from 'formik';
import { Form } from 'antd';
import { MyValues, SelectEvent, InputEvent } from './type/type';
import { DispatchProp, useDispatch } from 'react-redux';
import { actSignUp } from './duck/action';
import { Dispatch } from 'redux';

export default function AuthPage() {
  const dispatch: any = useDispatch();
  const [status, setStatus] = useState(false);
  const formik: FormikProps<MyValues> = useFormik<MyValues>({
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
      dispatch(actSignUp(values))
    }
  });
  const handleOnchange = (e: InputEvent | SelectEvent) => {
    const { name, value } = e.target
    formik.setFieldValue(name, value)
  }
  return (
    <div>
      <div className={`containerAuth ${status ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Đăng nhập</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Tài khoản" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Mật khẩu" />
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
            </form>
            <Form
              onSubmitCapture={formik.handleSubmit}
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              action="#" className="sign-up-form">
              <h2 className="title">Đăng ký</h2>
              <div className="input-field input-sign-up">
                <input onChange={handleOnchange} name='taiKhoan' type="text" placeholder="Tài khoản" />
              </div>
              <div className='max-w-[380px] w-full text-[rgba(240,23,23,.835)]'>
                <p>sai</p>
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
                  <option value="GP010">GP10</option>
                  <option value="GP011">GP11</option>
                  <option value="GP012">GP12</option>
                  <option value="GP013">GP13</option>
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

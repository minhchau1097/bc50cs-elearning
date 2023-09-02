import React, { useState } from 'react'

export default function AuthPage() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <div className={`containerAuth ${status ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Đăng nhập</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
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
            <form action="#" className="sign-up-form">
              <h2 className="title">Đăng ký</h2>
              <div className="input-field input-sign-up">
                <input type="text" placeholder="Tài khoản" />
              </div>
              <div className="input-field input-sign-up">
                <input type="password" placeholder="Mật khẩu" />
              </div>
              <div className="input-field input-sign-up">

                <input type="email" placeholder="Họ và tên" />
              </div>
              <div className="input-field input-sign-up">

                <input type="email" placeholder="Số điện thoại" />
              </div>
              <div className="input-field input-sign-up">

                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field input-sign-up overflow-hidden">
                <select className='absolute left-0 w-full h-full bg-[#f0f0f0] text-[#aaa] font-semibold' placeholder="Mã nhóm" >
                  <option value="">GP01</option>
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
            </form>
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

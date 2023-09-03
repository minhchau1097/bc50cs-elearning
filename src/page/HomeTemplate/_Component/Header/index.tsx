import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { NavigateFunction, useNavigate } from 'react-router';
export default function Header() {
  const navigate: NavigateFunction = useNavigate();
  const style = {
    width: '100%'
  }
  return (
    <>
      <nav className="navbar navbar-expand-md  navbar-dark pl-5 pr-5 headerFixed" style={style}>
        <div className='d-flex justify-content-between'>

        </div>
        <NavLink to="/">
          <img src={require("../../../../Image/logo (1).png")} width={250} />
        </NavLink>
        <form><input className='searchForm mt-2' type="text" placeholder="Tìm kiếm" /></form>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          Menu
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link text-dark" : "nav-link text-dark"} to="/"> <i className="fa fa-home"></i>TRANG CHỦ</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link text-dark" : "nav-link text-dark"} to="/danhmuckhoahoc">DANH MỤC</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link  text-dark" : "nav-link  text-dark"} to="/blog">BLOG</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link  text-dark" : "nav-link  text-dark"} to="/sukien ">SỰ KIỆN</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link  text-dark" : "nav-link  text-dark"} to="/thongtin">THÔNG TIN</NavLink>
            </li >
            <li className="nav-item">
              <button className='btn btn-warning text-white' onClick={() => {
                navigate('/auth', { replace: true })
              }}>ĐĂNG NHẬP</button>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

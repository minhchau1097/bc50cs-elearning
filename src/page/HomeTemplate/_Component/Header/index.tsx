
import { NavLink, useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate();
  const renderUser = () => {
    if (localStorage.getItem('USER_CUSTOMER')) {
      let user = JSON.parse(localStorage.getItem('USER_CUSTOMER') || '')
      return <div>
        <span className='logo-user'>{user.hoTen.slice(0, 1)}</span>
      </div>
    } else {

      return <button className='btn btn-warning text-white' onClick={() => {
        navigate('/auth', { replace: true });
      }}>ĐĂNG NHẬP</button>
    }

  }
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

          </ul>
        </div>
        {renderUser()}

      </nav>
    </>
  )
}

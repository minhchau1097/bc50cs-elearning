
import { actLogOut } from 'page/AdminTemplate/AuthPage/duck/action';
import { actWaittingCourse } from 'page/AdminTemplate/ManageUser/Course/duck/action';
import { useState, useEffect } from 'react';
import { Link, NavLink,  useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/type';
import { DetailCourse } from 'type/type';

export default function Header() {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.detailUserReducer);


  useEffect(() => {
    if (localStorage.getItem('USER_CUSTOMER')) {
      let user = JSON.parse(localStorage.getItem('USER_CUSTOMER') || '')
      console.log(user.taiKhoan)
      dispatch(actWaittingCourse({ taiKhoan: user.taiKhoan }))
    }
  }, [])
  const renderCart = () => {
    return data?.chiTietKhoaHocGhiDanh.map((item: DetailCourse, index) => {
      return <div className='user-cart-detail' key={index}>
        <div className='detail-img'>

          <img src={item.hinhAnh} alt="logo" onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = 'https://www.makeforum.org/wp-content/uploads/2021/04/ngon-ngu-lap-trinh-850x415.png';
          }} />
        </div>
        <div className='detail-title'>
          <h3>{item.tenKhoaHoc}</h3>
          <p>{item.maKhoaHoc}</p>
          <span>500.000đ</span>
        </div>
      </div>
    })

  }
  const renderUser = () => {
    if (localStorage.getItem('USER_CUSTOMER')) {
      let user = JSON.parse(localStorage.getItem('USER_CUSTOMER') || '')
      return <>
        <div className='logo-user-cart'>
          <Link to={'/gio-hang'}>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span>{data ? data.chiTietKhoaHocGhiDanh.length : 0}</span>
          </Link>
          <div className='user-cart-overplay'>

            <div className='user-cart'>
              {data?.chiTietKhoaHocGhiDanh ? (
                <>
                  <div className='user-cart-content'>

                    {renderCart()}
                  </div>
                  <div className='user-cart-total'>
                    <p>Tổng cộng : <span>2.000.000đ</span></p>
                    <Link to={'/gio-hang'}>Đến giỏ hàng</Link>
                  </div>
                </>
              ) : <div style={{padding:20, width:300,textAlign:'center'}}>
                <p>Giỏ hàng trống</p>
              </div>}


            </div>

          </div>
        </div>
        <div className='logo-user' >
          <span onClick={() => {
            setStatus((preValue) => !preValue)
          }}>{user.hoTen.slice(0, 1)}</span>
        </div>
        <div className='about-user-overplay' style={{ display: `${status ? 'block' : 'none'}` }} onClick={() => {
          setStatus(false)
        }}>
          <div className='about-user' >
            <Link to={'/thong-tin-ca-nhan'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
              Thông tin cá nhân</Link>
            <a onClick={() => {
              dispatch(actLogOut(navigate))
            }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              Đăng xuất</a>
          </div>

        </div>
      </>
    } else {

      return <button className='btn btn-warning text-white' onClick={() => {
        navigate('/auth', { replace: false });
      }}>ĐĂNG NHẬP</button>
    }

  }

  const handleSubmit= (event: any)=>{
    event.preventDefault();
    navigate(`/timkiem/${event.target[0].value}`)
    if (event.target[0].value == '') {
      navigate(`/`);
  }
  };

  return (
    <>
      <nav className="navbar navbar-expand-md  navbar-dark pl-5 pr-5 headerFixed" style={{ width: '100%' }}>
        <div className='d-flex justify-content-between'>

        </div>
        <NavLink to="/">
          <img className='logo' src={require("../../../../Image/logo (1).png")} width={250} />
        </NavLink>
        <form  onSubmit={handleSubmit}> <input className='searchForm mt-2' type="text" 
        placeholder="Tìm kiếm" 
        /></form>
        <button className="navbar-toggler p-2 text-light" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          Menu
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item " style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link text-dark" : "nav-link text-dark"} to="/"> TRANG CHỦ</NavLink>
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

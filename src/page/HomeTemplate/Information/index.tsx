
import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/type'
import { actDetailUser } from './duck/action';
import { DetailUser } from 'type/type';
import { Modal } from 'antd';

export default function Information() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { data, loading, error } = useAppSelector(state => state.detailUserReducer);
    useEffect(() => {
        dispatch(actDetailUser())

    }, [])
   
    // return (

    //     // renderInfor()

    // )
    return (
        <section  className='infor-user' style={{ backgroundColor: '#eee', minHeight: '100vh' }}>
            <div className="px-[50px] py-5">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className=" mb-4">
                            <ol className="breadcrumb mb-0 bg-light  p-3 rounded-[8px]" >
                                <li className="breadcrumb-item"><Link to={'/'}>Trang chủ</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Thông tin cá nhân</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4 rounded-[8px]" >
                            <div className="card-body text-center">
                                <div >
                               
                                    <span className='text-white bg-[#f6ba35] rounded-full w-16 h-16 leading-[64px] uppercase font-semibold text-[24px] inline-block'> {data?.hoTen.slice(0, 1)}</span>
                                    <h5 className="my-3">{data?.hoTen}</h5>
                                    <p className="text-muted mb-1">{data?.soDT}</p>
                                    <p className="text-muted mb-4">{data?.email}</p>
                                </div>

                                <div className="d-flex justify-content-center mb-2">
                                    <button className="btn btn-primary flex" onClick={() => {
                                        navigate('/thong-tin-ca-nhan/chinh-sua', { replace: true })
                                    }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>
                                   Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0 rounded-[8px]" >
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush  rounded-[8px]" >
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning" />
                                        <p className="mb-0">https://mdbootstrap.com</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                                        <p className="mb-0">@mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4 rounded-[8px]" >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Họ và tên</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.hoTen}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Số điện thoại</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.soDT}</p>
                                    </div>
                                </div>


                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mã nhóm </p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data?.maNhom}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0 rounded-[8px]">
                                    <div className="card-body">
                                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                        <div className="progress rounded mb-2" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0 rounded-[8px]">
                                    <div className="card-body">
                                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                        <div className="progress rounded mb-2" style={{ height: 5 }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

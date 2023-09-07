
import React from 'react'
import { Link } from 'react-router-dom'

export default function Information() {
    return (
        //      <section style={{backgroundColor: '#eee'}}>
        //   <div className="container mx-auto sm:px-4 py-5">
        //    <h3 className='text-center'>Thông tin cá nhân</h3>
        //     <div className="flex flex-wrap ">
        //       <div className="lg:w-1/3 pr-4 pl-4">
        //         <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4">
        //           <div className="flex-auto p-6 text-center">
        //             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-full max-w-full h-auto" style={{width: 150}} />
        //             <h5 className="my-3">John Smith</h5>
        //             <p className="text-gray-700 mb-1">Full Stack Developer</p>
        //             <p className="text-gray-700 mb-4">Bay Area, San Francisco, CA</p>
        //             <div className="flex justify-center mb-2">
        //               <button type="button" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Follow</button>
        //               <button type="button" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600  hover:text-white bg-white hover:bg-blue-600 ms-1">Message</button>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 lg:mb-0">
        //           <div className="flex-auto p-6 ">
        //             <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300  rounded-3">
        //               <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center p-6">
        //                 <i className="fas fa-globe fa-lg text-yellow-500" />
        //                 <p className="mb-0">https://mdbootstrap.com</p>
        //               </li>
        //               <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center p-6">
        //                 <i className="fab fa-github fa-lg" style={{color: '#333333'}} />
        //                 <p className="mb-0">mdbootstrap</p>
        //               </li>
        //               <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center p-6">
        //                 <i className="fab fa-twitter fa-lg" style={{color: '#55acee'}} />
        //                 <p className="mb-0">@mdbootstrap</p>
        //               </li>
        //               <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center p-6">
        //                 <i className="fab fa-instagram fa-lg" style={{color: '#ac2bac'}} />
        //                 <p className="mb-0">mdbootstrap</p>
        //               </li>
        //               <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center p-6">
        //                 <i className="fab fa-facebook-f fa-lg" style={{color: '#3b5998'}} />
        //                 <p className="mb-0">mdbootstrap</p>
        //               </li>
        //             </ul>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="lg:w-2/3 pr-4 pl-4">
        //         <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4">
        //           <div className="flex-auto p-6">
        //             <div className="flex flex-wrap ">
        //               <div className="sm:w-1/4 pr-4 pl-4">
        //                 <p className="mb-0">Full Name</p>
        //               </div>
        //               <div className="sm:w-3/4 pr-4 pl-4">
        //                 <p className="text-gray-700 mb-0">Johnatan Smith</p>
        //               </div>
        //             </div>
        //             <hr />
        //             <div className="flex flex-wrap ">
        //               <div className="sm:w-1/4 pr-4 pl-4">
        //                 <p className="mb-0">Email</p>
        //               </div>
        //               <div className="sm:w-3/4 pr-4 pl-4">
        //                 <p className="text-gray-700 mb-0">example@example.com</p>
        //               </div>
        //             </div>
        //             <hr />
        //             <div className="flex flex-wrap ">
        //               <div className="sm:w-1/4 pr-4 pl-4">
        //                 <p className="mb-0">Phone</p>
        //               </div>
        //               <div className="sm:w-3/4 pr-4 pl-4">
        //                 <p className="text-gray-700 mb-0">(097) 234-5678</p>
        //               </div>
        //             </div>
        //             <hr />
        //             <div className="flex flex-wrap ">
        //               <div className="sm:w-1/4 pr-4 pl-4">
        //                 <p className="mb-0">Mobile</p>
        //               </div>
        //               <div className="sm:w-3/4 pr-4 pl-4">
        //                 <p className="text-gray-700 mb-0">(098) 765-4321</p>
        //               </div>
        //             </div>
        //             <hr />
        //             <div className="flex flex-wrap ">
        //               <div className="sm:w-1/4 pr-4 pl-4">
        //                 <p className="mb-0">Address</p>
        //               </div>
        //               <div className="sm:w-3/4 pr-4 pl-4">
        //                 <p className="text-gray-700 mb-0">Bay Area, San Francisco, CA</p>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="flex flex-wrap ">
        //           <div className="md:w-1/2 pr-4 pl-4">
        //             <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 md:mb-0">
        //               <div className="flex-auto p-6">
        //                 <p className="mb-4"><span className="text-blue-600 italic me-1">assigment</span> Project Status
        //                 </p>
        //                 <p className="mb-1" style={{fontSize: '.77rem'}}>Web Design</p>
        //                 <div className="progress rounded" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //                 <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Website Markup</p>
        //                 <div className="progress rounded" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //                 <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>One Page</p>
        //                 <div className="progress rounded" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //                 <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Mobile Template</p>
        //                 <div className="progress rounded" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //                 <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Backend API</p>
        //                 <div className="progress rounded mb-2" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div className="md:w-1/2 pr-4 pl-4">
        //             <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 md:mb-0">
        //               <div className="flex-auto p-6">
        //                 <p className="mb-4"><span className="text-blue-600 italic me-1">assigment</span> Project Status
        //                 </p>
        //                 <p className="mb-1" style={{fontSize: '.77rem'}}>Web Design</p>
        //                 <div className="progress rounded" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //                 <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Website Markup</p>
        //                 <div className="progress rounded" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //                 <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>One Page</p>
        //                 <div className="progress rounded" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //                 <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Mobile Template</p>
        //                 <div className="progress rounded" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //                 <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Backend API</p>
        //                 <div className="progress rounded mb-2" style={{height: 5}}>
        //                   <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>

        <section className='infor-user' style={{ backgroundColor: '#eee',minHeight:'100vh' }}>
            <div className="container py-5">
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
                                <div className='logo-user'>

                                    <span >M</span>
                                </div>
                                <h5 className="my-3">John Smith</h5>
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button className="btn btn-primary">Chỉnh sửa</button>
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
                                        <p className="text-muted mb-0">Johnatan Smith</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">example@example.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Số điện thoại</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(097) 234-5678</p>
                                    </div>
                                </div>


                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mã nhóm </p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
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

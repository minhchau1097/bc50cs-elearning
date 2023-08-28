

export default function FeedBack() {

    return (
        <div className='px-12 py-5 mt-5'>
            <div className="feed-back py-12  relative">
                <div className="angle"></div>
                <div className="small-box small-box-top-left"></div>
                <div className="small-box small-box-bottom-left"></div>
                <div className="small-box small-box-top-right"></div>
                <div className="small-box small-box-bottom-right"></div>
                <div className="feed-back-content grid grid-cols-2">
                    <div className='content-left relative flex justify-center'>
                        <div className='bg-img'></div>
                        <div className='z-10 relative'>

                            <img width={200} height={200} src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png" alt="logo" />
                        </div>
                    </div>
                    <div className='content-right pt-3'>
                        <p >
                            Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                        </p>
                        <p>Nhi Dev</p>
                        <span>Học viên xuất sắc</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

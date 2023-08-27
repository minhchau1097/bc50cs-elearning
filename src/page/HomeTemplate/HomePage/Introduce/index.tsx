
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';


export default function Introduce() {
    return (
        <div className='container-fluid'>
            <div className='introduce'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    grid={{
                        rows: 1,

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='mySwiper'
                >

                    <SwiperSlide className='text-center'>
                        <div>

                            <img src="	https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg" alt="logo" />
                            <h6>Big DadMoon</h6>
                        </div>
                        <div>
                            <p>Chuyên gia lĩnh vực</p>
                            <p>Lập trình</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='text-center'>
                        <div>

                            <img src="	https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg" alt="logo" />
                            <h6>Big DadMoon</h6>
                        </div>
                        <div>
                            <p>Chuyên gia lĩnh vực</p>
                            <p>Lập trình</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center'>
                        <div>

                            <img src="	https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg" alt="logo" />
                            <h6>Big DadMoon</h6>
                        </div>
                        <div>
                            <p>Chuyên gia lĩnh vực</p>
                            <p>Lập trình</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center'>
                        <div>

                            <img src="	https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg" alt="logo" />
                            <h6>Big DadMoon</h6>
                        </div>
                        <div>
                            <p>Chuyên gia lĩnh vực</p>
                            <p>Lập trình</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

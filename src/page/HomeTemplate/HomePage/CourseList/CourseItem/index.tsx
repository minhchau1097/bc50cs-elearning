import { Course } from '../../../../../type/type';
import { NavLink } from 'react-router-dom';

interface Props{
    item : Course;
  }

export default function CourseItem({item} : Props) {
  return (
    <div className='col-md-6 col-xl-3 mt-4 cardGlobal'>
      <NavLink to={`/`}>
          <div className='cardItem'>
              <img src={item?.hinhAnh} alt="" />
              <span className='titleCard'>{item?.tenKhoaHoc}ava</span>
              <div className='cardBodyGlobal'>
                  <h6 className='pb-2'>Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                  <div className='cardIcon'>
                      <span><i className="far fa-clock iconOclock"></i>8 giờ</span>
                      <span><i className="far fa-calendar-alt iconCalendar"></i>4 tuần</span>
                      <span><i className="fas fa-signal iconLevel"></i>Tất cả</span>
                  </div>
              </div>
              <div className='cardFooter'>
                  <div className='titleMaker'>
                      <div className='imgCardFooter'>
                          <img src={require("../../../../../Image/avatar2.bb9626e2.png")} alt="" />
                      </div>
                      <span className='ml-2 text-muted'>Professor</span>
                  </div>
                  <div><p>800.000<sup>đ</sup></p><p>400.000<sup>đ</sup><i className="fas fa-tag iconTag"></i></p></div>
              </div>
              <div className='cardSale'>POPULAR</div>
          </div>
      </NavLink>
  </div>
  )
}



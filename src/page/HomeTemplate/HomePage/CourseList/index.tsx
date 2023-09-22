import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actFetchListCourse } from './duck/action';
import CourseItem from './CourseItem';
import { Course } from '../../../../type/type';
import { RootState } from '../../../../store';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Card, Pagination, Table } from 'antd';
export default function CourseList() {
  const dispatch: any = useDispatch();
  const dataList = useSelector((state: RootState) => state.courseListReducer.data);

  useEffect(() => {
    dispatch(actFetchListCourse());
  }, []);

  const renderCourseList = () => {
    return dataList?.map((item: Course) => {
      return <CourseItem
        key={item.maKhoaHoc}
        item={item}
      />
    })
  }
  

  return (
    <section className='pt-4 pb-4'>

      <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp'>
        <div className="row">
        {renderCourseList()}
        </div>
      </AnimationOnScroll>
    </section>
  )
}

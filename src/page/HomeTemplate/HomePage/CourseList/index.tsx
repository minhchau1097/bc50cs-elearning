import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import { actFetchListCourse } from './duck/action';
import CourseItem from './CourseItem';
import { Course } from '../../../../type/type';

export default function CourseList() {
  const dispatch : any= useDispatch();
  const dataList = useSelector((state:any)=>state.courseListReducer.data);
  console.log(dataList);
  

  useEffect(()=>{
    dispatch(actFetchListCourse());
  },[]);

  const renderCourseList =()=>{
    return dataList?.map((item: any)=>{
      return <CourseItem
      key ={item.maKhoaHoc}
      item = {item}
      />
    })
  }

  return (
    <section className="row mt-4">
      <h1>hello</h1>
      {renderCourseList()}
    </section>
  )
}

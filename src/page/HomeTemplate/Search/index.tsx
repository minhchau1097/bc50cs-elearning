import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useAppDispatch } from 'store/type';
import { actFetchListCourse } from '../HomePage/CourseList/duck/action';
import { useParams } from 'react-router-dom';
import { Course } from 'type/type';
import Product from '../Course/Product';

export default function Search() {

  const param = useParams()
  const dispatch = useAppDispatch();
  const dataCourse = useSelector((state: RootState)=>state.courseListReducer.data);
  console.log(dataCourse);
  

  useEffect(()=>{
    dispatch(actFetchListCourse(param.id));
  },[param.id]);

  const renderItem = ()=>{
    return dataCourse?.map((item : Course)=>{
      return <Product
      key={item.maKhoaHoc}
      item = {item}
      />
    })  
};

  return (
    <div className='row mt-4 pb-5'>
         {renderItem()}
    </div>
  )
}

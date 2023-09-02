import { NavLink } from "react-router-dom";
import { CategoryType } from "../duck/type";
import "../../../../Image/app-development-concept-illustration_114360-5164.png"


interface Props{
  item : CategoryType;
  img : string;
}

export default function CategoryItem({item, img} : Props) {
  // console.log(item,  img);
  return (
    <NavLink to={`/khoahoc/${item.maDanhMuc}`} className="categoryItem col-md-6 col-xl-4">
            <img src={img} alt="" />
            <p>{item.tenDanhMuc}</p>
    </NavLink>
  )
}

import Number from "./Countup";
import CourseItem from "./CourseItem";
import InfoCourse from "./InfoCourse";
import Introduce from "./Introduce";

export default function HomePage() {
  return (
    <div className="homePage">
      <InfoCourse/>
      <CourseItem/>
      <Number />
      <Introduce />
    </ div>
  )
}

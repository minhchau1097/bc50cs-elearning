import Number from "./Countup";
import CourseItem from "./CourseItem";
import FeedBack from "./Feedback";
import InfoCourse from "./InfoCourse";
import Introduce from "./Introduce";
import Welcome from "./Welcome";

export default function HomePage() {
  return (
    <div className="homePage">
      <Welcome />
      <InfoCourse/>
      <CourseItem/>
      <Number />
      <Introduce />
      <FeedBack />
    </ div>
  )
}

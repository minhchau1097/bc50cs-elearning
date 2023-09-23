import Loader from "Loader";
import PayPalCheckout from "../Paypal/PayPalCheckout";
import Number from "./Countup";
import CourseList from "./CourseList";
import FeedBack from "./Feedback";
import InfoCourse from "./InfoCourse";
import Introduce from "./Introduce";
import Welcome from "./Welcome";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(true)
    setTimeout(() => {
      setStatus(false)
    }, 1000)
  }, [])
  if (status) return <Loader color={'#f6ba35'} value={50} />
  return (
    <div>
      <Welcome />
      <InfoCourse />
      <CourseList />
      <Number />
      <Introduce />
      <FeedBack />
    </ div>
  )
}

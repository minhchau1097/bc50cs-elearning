import Number from "./Countup";
import FeedBack from "./Feedback";
import Introduce from "./Introduce";
import Welcome from "./Welcome";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Number />
      <Introduce />
      <FeedBack />
    </ >
  )
}

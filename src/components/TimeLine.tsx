import { useInView } from "react-intersection-observer";
import "../css/timeline.css";
import TimeLineItem from "./TimeLineItem";

export type Event = {
  title: string;
  date: string;
  description: string;
};

type Props = {
  events: Event[];
  name: string;
};

export default function TimeLine(props: Props) {
  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div ref={ref} className="timeline">
      <h2 className={`timeline-name ${inView ? "show" : "hidden"}`}>
        {props.name}
      </h2>

      <ul className="timeline-items">
        {props.events.map((event, index) => {
          return <TimeLineItem event={event} key={index} />;
        })}
      </ul>
    </div>
  );
}

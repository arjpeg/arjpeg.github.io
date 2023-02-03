import { useInView } from "react-intersection-observer";
import "../css/timelineitem.css";

import { Event } from "./TimeLine";

export default function TimeLineItem({ event }: { event: Event }) {
  const { ref, inView } = useInView({
    threshold: 0.4
  });

  return (
    <li ref={ref} className={`timeline-item ${inView ? "show" : "hidden"}`}>
      <h3 className="timeline-item-name">
        {event.title} <small className="timeline-item-date">{event.date}</small>
      </h3>
      <p className="timeline-item-description">{event.description}</p>
    </li>
  );
}

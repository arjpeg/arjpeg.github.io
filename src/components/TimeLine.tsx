import "../css/timeline.css";

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
  return (
    <div className="timeline">
      <h2 className="timeline-name">{props.name}</h2>

      <ul className="timeline-items">
        {props.events.map((event, index) => {
          return (
            <li className="timeline-item" key={index}>
              <h3 className="timeline-item-name">
                {event.title}{" "}
                <small className="timeline-item-date">{event.date}</small>
              </h3>
              <p className="timeline-item-description">{event.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { useInView } from "react-intersection-observer";
import "../css/skill.css";

export type SkillType = {
  image: string;
  title: string;
  description: string;
  years: number | string;

  url?: string;
};

type Props = {
  animationDelay?: number;
};

export default function Skill(props: SkillType & Props) {
  const { ref, inView } = useInView({
    threshold: 0
  });

  let style = {
    opacity: 0,
    animation: inView
      ? `fadeInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${props.animationDelay}s forwards`
      : ""
  };

  if (!inView) {
    style.opacity = 0;
  }

  return (
    <div ref={ref} className="skill" style={style}>
      <img
        className="skill-image"
        src={props.image}
        alt={`Logo of ${props.title}`}
      />
      <div style={{ textAlign: "center" }}>
        <a target="_blank" className="skill-name" href={props.url}>
          <h3>{props.title}</h3>
        </a>
      </div>
      <p className="skill-description">{props.description}</p>
      <small className="skill-duration">
        Worked with {props.title} for {props.years}
        {props.years === 1 ? " year" : " years"}.
      </small>
    </div>
  );
}

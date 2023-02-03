import "../css/skill.css";

export type SkillType = {
  image: string;
  title: string;
  description: string;
  years: number | string;

  url?: string;
};

type Props = {
  style?: any;
};

export default function Skill(props: SkillType & Props) {
  return (
    <div className="skill" style={props.style}>
      <img
        className="skill-image"
        src={props.image}
        alt={`Logo of ${props.title}`}
      />
      <div style={{ textAlign: "center" }}>
        <a className="skill-name" href={props.url}>
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

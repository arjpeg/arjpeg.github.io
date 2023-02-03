import { useInView } from "react-intersection-observer";
import Skill, { SkillType } from "./Skill";

import "../css/skills.css";

import FlaskIcon from "../assets/icons/FlaskIcon.png";
import PythonIcon from "../assets/icons/PythonIcon.png";
import ReactIcon from "../assets/icons/ReactIcon.png";

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.4
  });

  const skills: SkillType[] = [
    {
      title: "React",
      image: ReactIcon,
      description:
        "I have worked with ReactJS for a while, now getting used to its syntax, and becoming proficient in the library. In fact, this very website was made in React!",
      years: "1/4",
      url: "https://reactjs.org/"
    },
    {
      title: "Python",
      image: PythonIcon,
      description:
        "Python has for a long time been my go to language for implementing various things. I have ammased a somewhat-comprehensive understanding of the language, using it to implement things like websites, and games.",
      years: "5+",
      url: "https://www.python.org/"
    },
    {
      title: "Flask",
      image: FlaskIcon,
      description:
        "I have been using Flask for a while to make fun, and interacitve websites. However, recently I have switched to using ExpressJS (Node) more.",
      years: 2,
      url: "https://flask.palletsprojects.com/en/2.2.x/"
    }
  ];

  return (
    <section ref={ref}>
      <h2 className="section-title">My Skills</h2>

      <div className="skill-list">
        {skills.map((skill, index) => {
          const delay = index * 0.1;

          return (
            <Skill
              title={skill.title}
              description={skill.description}
              image={skill.image}
              years={skill.years}
              url={skill.url}
              key={index}
              style={{
                animation: inView
                  ? `fadeInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s forwards`
                  : ""
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

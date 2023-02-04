import "../css/project.css";

import SocialLink from "./SocialLink";

import { useInView } from "react-intersection-observer";
import GithubIcon from "../assets/icons/GithubIcon.svg";
import LinkIcon from "../assets/icons/LinkIcon.svg";

export type ProjectType = {
  name: string;
  description: string;
  image: string;

  link?: string;
  github?: string;
};

type Props = {
  project: ProjectType;
  direction: "left" | "right";
};

export default function Project(props: Props) {
  const { ref, inView } = useInView({
    threshold: 0
  });

  const { project } = props;

  const style = {
    animation: inView
      ? `fade-${props.direction} 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards`
      : "",
    opacity: inView ? 1 : 0
  };

  return (
    <div ref={ref} className="project" style={style}>
      <h3 className="project-title">
        {project.name}

        {project.github && (
          <SocialLink
            href={project.github}
            icon={GithubIcon}
            alt="Link to the Github Page"
          />
        )}
        {project.link && (
          <SocialLink
            href={project.link}
            icon={LinkIcon}
            alt="Link to the project"
          />
        )}
      </h3>

      <div className="project-about" data-dir={props.direction}>
        <img
          className="project-thumbnail"
          src={project.image}
          alt="Thumbnail to the project"
        />
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
}

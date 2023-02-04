import "../css/projectcontent.css";
import ProjectList from "./ProjectList";
import SectionTitle from "./SectionTitle";

export default function ProjectContent() {
  return (
    <div className="project-content">
      <SectionTitle title="Projects" />

      <p>
        Here is a brief overview of a couple of interesting projects I have
        made!
      </p>

      <ProjectList />
    </div>
  );
}

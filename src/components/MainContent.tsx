import "../css/maincontent.css";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

export default function MainContent() {
  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

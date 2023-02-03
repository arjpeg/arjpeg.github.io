import "../css/maincontent.css";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

export default function MainContent() {
  const school =
    new Date().getFullYear() >= 2023
      ? "Independence High School"
      : "Nelson Middle School";

  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

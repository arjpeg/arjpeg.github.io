import GithubIcon from "../assets/icons/GithubIcon.svg";
import LinkdinIcon from "../assets/icons/LinkdinIcon.svg";

import "../css/socials.css";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://www.github.com/arjpeg">
        <img src={GithubIcon} alt="My github" className="social-icon"></img>
      </a>
      <a href="https://www.github.com/arjpeg">
        <img src={LinkdinIcon} alt="My github" className="social-icon"></img>
      </a>
    </div>
  );
}

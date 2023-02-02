import HeroImage from "../assets/images/hero-img.jpeg";

import "../css/hero.css";

import SocialLink from "./SocialLink";
import Socials from "./Socials";
import TypewriterEffect from "./TypewriterEffect";

// Import icons
import GithubIcon from "../assets/icons/GithubIcon.svg";
import LinkdinIcon from "../assets/icons/LinkdinIcon.svg";
import MailIcon from "../assets/icons/MailIcon.svg";
import PhoneIcon from "../assets/icons/PhoneIcon.svg";

type Props = {};

export default function Hero(props: Props) {
  return (
    <section className="hero">
      <img className="hero-image" src={HeroImage} alt="Background image" />

      <div className="hero-container">
        <h1>Aditya Rao Udupi</h1>

        <Socials>
          <SocialLink href="https://github.com/arjpeg" icon={GithubIcon} />
          <SocialLink href="https://github.com/arjpeg" icon={LinkdinIcon} />
          <SocialLink href="mailto:araoudupi@gmail.com" icon={MailIcon} />
          <SocialLink href="tel:468-768-3308" icon={PhoneIcon} />
        </Socials>
        <TypewriterEffect words={["Webdev", "Python", "Gamedev", "Java"]} />
      </div>
    </section>
  );
}

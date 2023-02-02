import HeroImage from "../assets/images/hero-img.jpeg";

import "../css/hero.css";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-image" src={HeroImage} alt="Background image" />

      <div className="hero-container">
        <h1>Aditya Rao Udupi</h1>

        <Socials />
      </div>
    </section>
  );
}

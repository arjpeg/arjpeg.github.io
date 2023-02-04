import ContactInfo from "./ContactInfo";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  const school =
    new Date().getFullYear() >= 2023
      ? "Independence High School"
      : "Nelson Middle School";

  return (
    <section>
      <SectionTitle title="About Me" />

      <p>
        Hi! My name is Aditya Rao Udupi, and I am a student currently studying
        in {school}. I enjoy programming, cycling, and reading in my free time.
        I also enjoy playing my instruments (the Violin, Piano, and the
        Classical Flute) to help me relax! My goal in life is to always continue
        to learn, and never give up.
      </p>

      <br />
      <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Contact Info</p>

      <ContactInfo />
    </section>
  );
}

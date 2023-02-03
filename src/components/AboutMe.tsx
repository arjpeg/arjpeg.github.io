export default function AboutMe() {
  const school =
    new Date().getFullYear() >= 2023
      ? "Independence High School"
      : "Nelson Middle School";

  return (
    <section>
      <h2 className="section-title">About Me</h2>

      <p>
        Hi! My name is Aditya Rao Udupi, and I am a student currently studying
        in {school}. I enjoy programming, cycling, and reading in my free time.
        I also enjoy playing my instruments (the Violin, Piano, and the
        Classical Flute) to help me relax! My goal in life is to always continue
        to learn, and never give up.
      </p>
    </section>
  );
}

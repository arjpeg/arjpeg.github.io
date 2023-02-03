import "../css/contactinfo.css";

export default function ContactInfo() {
  const currentGrade = new Date().getFullYear() - 2014;

  const getGradeName = (grade: number) => {
    let suffix = "th";

    if (![11, 12].includes(grade)) {
      if (grade % 10 == 1) suffix = "st";
      if (grade % 10 == 2) suffix = "nd";
      if (grade % 10 == 3) suffix = "rd";
    }

    return `${grade}${suffix}`;
  };

  return (
    <div className="contactinfo">
      <a className="contact-link" href="https://arjpeg.github.io">
        Website
      </a>
      <a className="contact-link" href="tel:469-768-3308">
        Phone Number
      </a>
      <a className="contact-link" href="mailto:araoudupi@gmail.com">
        Email
      </a>
      <a
        className="contact-link"
        href="https://schools.friscoisd.org/campus/high-school/independence/home"
      >
        School ({getGradeName(currentGrade)} Grade)
      </a>
    </div>
  );
}

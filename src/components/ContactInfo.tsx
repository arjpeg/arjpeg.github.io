import "../css/contactinfo.css";
import ContactLink from "./ContactLink";

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

  const links = [
    { href: "https://arjpeg.github.io", text: "Website" },
    { href: "tel:469-768-3308", text: "Phone Number" },
    { href: "mailto:araoudupi@gmail.com", text: "Email" },
    {
      href: "https://schools.friscoisd.org/campus/high-school/independence/home",
      text: `School (${getGradeName(currentGrade)} Grade)`
    }
  ];

  return (
    <div className="contactinfo">
      {links.map((link, index) => {
        return (
          <ContactLink
            key={index}
            href={link.href}
            text={link.text}
            animateDirection={index <= links.length / 2 ? "left" : "right"}
          />
        );
      })}
    </div>
  );
}

import { useInView } from "react-intersection-observer";
import "../css/contactlink.css";

type Props = {
  href: string;
  text: string;

  animateDirection?: "left" | "right";
};

export default function ContactLink(props: Props) {
  const { ref, inView } = useInView({
    threshold: 0
  });

  let style = {
    animation: inView
      ? `fade-in-${props.animateDirection} 0.5s ease-in-out forwards`
      : ""
  };

  return (
    <a
      target="_blank"
      ref={ref}
      className="contact-link"
      href={props.href}
      style={style}
    >
      {props.text}
    </a>
  );
}

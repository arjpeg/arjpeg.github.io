import "../css/socials.css";

type Props = {
  children: React.ReactNode;
};

export default function Socials(props: Props) {
  return <div className="socials">{props.children}</div>;
}

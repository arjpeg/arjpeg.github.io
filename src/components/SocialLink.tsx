type Props = {
  icon: string;
  href: string;

  alt?: string;
};

export default function SocialLink(props: Props) {
  return (
    <a href={props.href}>
      <img src={props.icon} alt={props.alt} className="social-icon"></img>
    </a>
  );
}

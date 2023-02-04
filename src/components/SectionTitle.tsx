import { useInView } from "react-intersection-observer";
import "../css/sectiontitle.css";

export default function SectionTitle({ title }: { title: string }) {
  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <h2
      ref={ref}
      className="section-title"
      style={{
        animation: inView
          ? `fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards`
          : "unset"
      }}
    >
      {title}
    </h2>
  );
}

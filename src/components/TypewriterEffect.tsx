import { useEffect, useRef, useState } from "react";
import "../css/typewritereffect.css";

type Props = {
  words: string[];
};

export default function TypewriterEffect(props: Props) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [wordBuffer, setWordBuffer] = useState("");
  const intervalId = useRef<number | undefined>(undefined);

  useEffect(() => {
    let wordIndex = 0;
    let goingUp = true;

    let word = props.words[currentWordIdx % props.words.length];

    intervalId.current = setInterval(() => {
      if (goingUp) {
        if (wordIndex++ > word.length) {
          goingUp = false;
          return;
        }

        setWordBuffer(word.substring(0, wordIndex));
      } else {
        if (wordIndex-- < 0) {
          setCurrentWordIdx(currentWordIdx + 1);
          clearInterval(intervalId.current);
        }

        setWordBuffer(word.substring(0, wordIndex));
      }
    }, 200);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [currentWordIdx, props.words]);

  return (
    <h2 className="typewriter-container">
      <span className="accent">{"<"}</span>
      <span className="typewriter">{wordBuffer}</span>
      <span className="accent">{" />"}</span>
    </h2>
  );
}

import { useEffect, useState } from "react";
import "../css/typewritereffect.css";

type Props = {
  words: string[];
};

export default function TypewriterEffect(props: Props) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [wordBuffer, setWordBuffer] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let goingUp = true;

    let word = props.words[currentWordIdx % props.words.length];

    let intervalId = setInterval(() => {
      if (goingUp) {
        if (wordIndex++ > word.length) {
          goingUp = false;
          return;
        }

        setWordBuffer(word.substring(0, wordIndex));
      } else {
        if (wordIndex-- < 0) {
          setCurrentWordIdx(currentWordIdx + 1);
          clearInterval(intervalId);
        }

        setWordBuffer(word.substring(0, wordIndex));
      }
    }, 200);
  }, [currentWordIdx]);

  return (
    <h2 className="typewriter-container">
      <span className="accent">{"<"}</span>
      <span className="typewriter">{wordBuffer}</span>
      <span className="accent">{" />"}</span>
    </h2>
  );
}

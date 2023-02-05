import { useRef } from "react";
import "../css/contactme.css";

export default function ContactMe() {
  const subject = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subjectValue = subject.current?.value;
    const messageValue = message.current?.value;

    open(
      `mailto:araoudupi@gmail.com?subject=${subjectValue}&body=${messageValue}`
    );

    subject.current!.value = "";
    message.current!.value = "";
  };

  return (
    <div className="contact-me">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit} className="contact-form" action="">
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            ref={subject}
            required
            type="text"
            name="subject"
            id="subject"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            required
            name="message"
            id="message"
            cols={30}
            rows={10}
            ref={message}
          ></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

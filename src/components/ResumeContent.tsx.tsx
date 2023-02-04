import "../css/resumecontent.css";
import SectionTitle from "./SectionTitle";
import TimeLine, { Event } from "./TimeLine";

export default function ResumeContent() {
  const educationEvents: Event[] = [
    {
      title: "Nelson Middle School",
      date: "2019 - 2023",
      description:
        "Graduated with honors for all 3 years. Took courses in Computer Science, and Algebra."
    },
    {
      title: "Independence High School",
      date: "2023 - 2027",
      description:
        "Currently attending. Will be taking cources such as Advanced Computer Science. AP Computer Science A, Mobile App development in Swift, alongside more math-oriented courses, such as Algebra 2, Advanced Geometry, Pre-Calculus, Calculus BC, etc..."
    }
  ];

  const computerScienceCoursesEvents: Event[] = [
    {
      title: "Introduction to Computer Science (Khan Academy)",
      date: "2014 - 2016",
      description:
        "Learned the basics of computer science, in addition to some concepts through graphics through the use of Khan Academy's Hour of Code courses, and their intro to WebDev course."
    },
    {
      title: "Python (Juni Learning)",
      date: "2017 - 2020",
      description:
        "Learned the basics of Python through Juni Learning in their Level 1 Python course (Graphics Superstar). Then moved on to their Level 2 Python course (Problem Solver), where I learned more about how programs are structed. Finally, I went on to their final Python course, Level 3 (Algorithms Master) in which I learned about algorithms, and how to use them to solve problems."
    },
    {
      title: "Java (Juni Learning)",
      date: "2021-2022",
      description:
        "Similarly to my progression in Python through Juni Learning, I started off by familiarizing myself with the basics of Java, especially considering this was my first statically typed language, and implemented them using the BlueJ API. I then moved on to more advanced concepts, such as algorithms, and data structures (such as implementing a Binary Tree, Stacks, Queues, and for the final project, I even assembled a version of Dijkstra's Pathfinding Algorithm)."
    }
  ];

  return (
    <div className="resume-content">
      <SectionTitle title="Resume" />

      <div className="timelines">
        <TimeLine name="Education" events={educationEvents} />
        <TimeLine
          name="Computer Science Courses"
          events={computerScienceCoursesEvents}
        />
      </div>
    </div>
  );
}

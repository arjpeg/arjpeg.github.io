import "../css/projectlist.css";
import Project, { ProjectType } from "./Project";

import PathFindingAlgos from "../assets/images/PathFindingAlgos.png";
import TankTrouble from "../assets/images/TankTrouble.png";
import TicTacToe from "../assets/images/TicTacToe.png";
import Pong from "../assets/images/Pong.png";

export default function ProjectList() {
  const projects: ProjectType[] = [
    {
      name: "Path Finding Algorithm Visualizer",
      description:
        "This was one of my latest, and most complex projects focused on visualizing various path finding algorithms, such as Dijkstra's, A*, and Breadth First Search. I implemented this project using Vanilla Javascript, HTML, and CSS. I also wrote the code for all of the algorithms myself, and managed the grid using a 2D array. This allowed me to create a simple interface, where the user could easily select a path type, and start / end nodes. Checkout the Github link to see the code, and the live link to see the project in action!",
      image: PathFindingAlgos,
      link: "https://pathfinding-algorithms.netlify.app/",
      github: "https://github.com/arjpeg/pathfinding-algos"
    },
    {
      name: "Tank Trouble",
      description:
        "Another one of my more recent projects, this is a recreation of the classic game Tank Trouble. The game utilizes a client-server architecture, where the server is written in Python, and the client is written in Vanilla Javascript with P5 JS. The client communicates to the server using websockets, and the server broadcasts the game state to all the other clients. The project taught me a lot about websockets, and how to implement a client-server architecture, and how to host a server on a tool called Railway. Checkout the Github link to see the code, and the live link to play the game!",
      image: TankTrouble,
      link: "https://arjpeg.github.io/TankTrouble/",
      github: "https://github.com/arjpeg/TankTrouble"
    },
    {
      name: "TicTacToe",
      description:
        "Being a sort-of precursor to the Tank Trouble project, this is a simple TicTacToe game that I made using HTML/CSS/JS. The project taught me a lot about basic web design, and how to implement a client-server architecture. Checkout the Github link to see the code, and the live link to play the game! (Note: Due to Heroku's free tier ending, the server is currently down, but the code is still available on Github)",
      image: TicTacToe,
      link: "https://arjpeg.github.io/tictactoe-client/",
      github: "https://github.com/arjpeg/tictactoe-client"
    },
    {
      name: "Pong",
      description:
        "A simple Pong game that I made using Python, through the Pygame API. This was my first real game that I made, and it taught me a lot about game development, and how to use the Pygame API. Checkout the Github link to see the code, and the live link to play the game!",
      image: Pong,
      github: "https://github.com/arjpeg/PongInPython"
    }
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => {
        return (
          <Project
            project={project}
            direction={index % 2 == 0 ? "left" : "right"}
            key={index}
          />
        );
      })}
    </div>
  );
}

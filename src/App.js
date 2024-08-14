import { useState } from "react";
import './App.css';
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://i.namu.wiki/i/G3RgLmpMXgENdo9TNMhpjFhgIT-pHMA6mmGeU0NWbrSjUfWivAeYsPxmvORYWOLF00hYlTHIgrAlhPO9Ed2CEQ.webp",
  },
  scissors: {
    name: "Scissors",
    img: "https://swsca-production.s3.amazonaws.com/uploads/attachments/17/edward-final-blog-post.jpg?1337098664",
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/619-v75UglL.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    const userResult = judgement(choice[userChoice], computerChoice);
    setResult(userResult);
    setComputerResult(userResult === "win" ? "lose" : userResult === "lose" ? "win" : "tie");
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;

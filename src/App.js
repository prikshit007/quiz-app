import "./App.css";
import { useState } from "react";
import Questions from "./constants/dummy.json";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const handleNextQuestion = (option) => {
    setCurrent(current + 1);
    setUserAnswers([...userAnswers, option]);
  };
  const retryQuiz = () => {
    setCurrent(0);
    setUserAnswers([]);
  };
  return (
    <div className="App">
      <h2>Prikshit Quiz</h2>
      {current < Questions.length && (
        <Question
          question={Questions[current]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {current === Questions.length && (
        <Result
          questions={Questions}
          userAnswers={userAnswers}
          retryQuiz={retryQuiz}
        />
      )}
    </div>
  );
}

export default App;

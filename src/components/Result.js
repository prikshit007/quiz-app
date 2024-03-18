import React from "react";

function Result({ questions, userAnswers, retryQuiz }) {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>

      <p>
        {" "}
        you answered {correctAnswers} out of {questions.length} {" "}
        <span onClick={retryQuiz}>Click here to retry</span>
      </p>

      <ul className="result-questions">
        {questions.map((question, index) => {
          return (
            <li
              className="result-question"
              data-correct={userAnswers[index]}
            >{`Q${index + 1} ${question.question}`}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default Result;

import React from "react";

function Question({ question, onAnswerClick }) {
  console.log(question.answerOptions)
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((option, index) => {
          return <li key={option.text}>
            <button onClick={()=>onAnswerClick(option.isCorrect)}>{option.text}</button>
            </li>;
        })}
      </ul>
    </div>
  );
}

export default Question;

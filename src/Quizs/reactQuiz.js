/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Quiz.css";

export default function ReactQuiz() {
  const questions = [
    {
      questionText: "What is React js ?",
      answerOptions: [
        { answerText: "Server side Framework", isCorrect: false },
        { answerText: "User-interface framework", isCorrect: false },
        { answerText: "Both", isCorrect: true },
        { answerText: "None of these", isCorrect: false },
      ],
    },
    {
      questionText: "Everything in React is _______________",
      answerOptions: [
        { answerText: "Module", isCorrect: false },
        { answerText: "Component", isCorrect: true },
        { answerText: "Package", isCorrect: false },
        { answerText: "Class", isCorrect: false },
      ],
    },
    {
      questionText: "In which directory React Components are saved?",
      answerOptions: [
        { answerText: "Inside js/componets/", isCorrect: true },
        { answerText: "Inside vendor/componets/", isCorrect: false },
        { answerText: "Inside external/componets/s", isCorrect: false },
        { answerText: "Inside vendor/", isCorrect: false },
      ],
    },
    {
      questionText: "How many elements does a react component return?",
      answerOptions: [
        { answerText: "2 Elements", isCorrect: false },
        { answerText: "1 Element", isCorrect: false },
        { answerText: "Multiple Elements", isCorrect: true },
        { answerText: "Non of these", isCorrect: false },
      ],
    },
    {
      questionText: "What is Babel ?",
      answerOptions: [
        { answerText: "A transpiler", isCorrect: false },
        { answerText: "An interprter", isCorrect: false },
        { answerText: "A Complier", isCorrect: false },
        { answerText: "Both Compiler and Transpiler", isCorrect: true },
      ],
    },
    {
      questionText: "Props are ________ into other components.",
      answerOptions: [
        { answerText: "Methods", isCorrect: true },
        { answerText: "Injected", isCorrect: false },
        { answerText: "Both 1 and 2", isCorrect: false },
        { answerText: "All of above", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following API is a MUST for every ReactJS component?",
      answerOptions: [
        { answerText: "getInitialState", isCorrect: false },
        { answerText: "render", isCorrect: false },
        { answerText: "renderComponent", isCorrect: true },
        { answerText: "None of above", isCorrect: false },
      ],
    },
    {
      questionText:
        "How can you access the state of a component from inside of a member function?",
      answerOptions: [
        { answerText: "this.values", isCorrect: true },
        { answerText: "this.getState()", isCorrect: false },
        { answerText: "this.prototype.stateValue", isCorrect: false },
        { answerText: "this.state", isCorrect: false },
      ],
    },
    {
      questionText: "What is the name of React.js Developer ?",
      answerOptions: [
        { answerText: " Jordan mike", isCorrect: false },
        { answerText: "Jordan Lee", isCorrect: false },
        { answerText: "Jordan Walke", isCorrect: true },
        { answerText: "Tim Lee", isCorrect: false },
      ],
    },
    {
      questionText: "ReactJS uses _____ to increase performance.",
      answerOptions: [
        { answerText: " Original DOM", isCorrect: false },
        { answerText: "Virtual DOM", isCorrect: true },
        { answerText: "Both 1 and 2", isCorrect: false },
        { answerText: "None of above", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <motion.div
      className='app container-fluid quiz-card'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {showScore ? (
        <div>
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
          <div className='score'>
            <a href='https://certificate-react.omjadhav3714.repl.co/' className='bt'>
              Get Certificate
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <h1 className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </h1>
            <h3 className='question-text'>
              {questions[currentQuestion].questionText}
            </h3>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className='btn btn-main'
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
              
            ))}
          </div>
          <div>
            <p>You have to select final answer only ,once selected you cannot change it.</p>
            </div>
        </>
      )}
    </motion.div>
  );
}

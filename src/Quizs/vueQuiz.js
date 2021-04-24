/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Quiz.css";

export default function VueQuiz() {
  const questions = [
    {
      questionText:
        "Which data binding interpolation is also known as “Mustache” syntax?",
      answerOptions: [
        { answerText: "v-on", isCorrect: false },
        { answerText: "v-model", isCorrect: false },
        { answerText: "{{}}", isCorrect: true },
        { answerText: "[]", isCorrect: false },
      ],
    },
    {
      questionText: " How to use for loop in Vue.js?",
      answerOptions: [
        { answerText: "vFor", isCorrect: false },
        { answerText: "v-for", isCorrect: true },
        { answerText: "*v-for", isCorrect: false },
        { answerText: "None of these", isCorrect: false },
      ],
    },
    {
      questionText:
        "Once a View Model is lost, all the event listeners are automatically removed.",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
        { answerText: "Probably True", isCorrect: false },
        { answerText: "Probably False", isCorrect: false },
      ],
    },
    {
      questionText: "How to create a Vue.js instance?",
      answerOptions: [
        {
          answerText: "var text = new object ({//options}).",
          isCorrect: false,
        },
        { answerText: "var text = new class ({//options}).", isCorrect: false },
        { answerText: "var text = new text ({//options}).", isCorrect: false },
        { answerText: "var text = new vue ({//options}).", isCorrect: true },
      ],
    },
    {
      questionText: "v-show doest not support the <template> element?",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
        { answerText: "Probably True", isCorrect: false },
        { answerText: "Probably False", isCorrect: false },
      ],
    },
    {
      questionText: "Props are ________ into other components.",
      answerOptions: [
        { answerText: ".passive", isCorrect: true },
        { answerText: ".directive", isCorrect: false },
        { answerText: ".once", isCorrect: false },
        { answerText: ".capture", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which event modifier is used for only prevent clicks on the element itself?",
      answerOptions: [
        { answerText: "@click.self.", isCorrect: false },
        { answerText: "@click.prevent.", isCorrect: true },
        { answerText: "click@.self.", isCorrect: false },
        { answerText: "@click.self.prevent.", isCorrect: false },
      ],
    },
    {
      questionText: "How to install vue resources?",
      answerOptions: [
        { answerText: "$ yarn add vue-resource", isCorrect: true },
        { answerText: "# yarn add vue-resource", isCorrect: false },
        { answerText: "@ yarn add vue-resource", isCorrect: false },
        { answerText: "& yarn add vue-resource", isCorrect: false },
      ],
    },
    {
      questionText: "How to represent filter in vue.js?",
      answerOptions: [
        { answerText: "::", isCorrect: false },
        { answerText: "!", isCorrect: false },
        { answerText: "|", isCorrect: true },
        { answerText: "||", isCorrect: false },
      ],
    },
    {
      questionText:
        "The updated hook is terminated after modifications have been written to the DOM",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
        { answerText: "Probably True", isCorrect: false },
        { answerText: "Probably False", isCorrect: false },
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
            <a href='' className='bt'>
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
        </>
      )}
    </motion.div>
  );
}

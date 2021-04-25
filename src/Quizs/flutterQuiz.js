/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Quiz.css";

//jshint:ignore start
export default function FlutterQuiz() {
  const questions = [
    {
      questionText:
        "Flutter is an __________ mobile application development framework created by Google.",
      answerOptions: [
        { answerText: "Open Source", isCorrect: true },
        { answerText: "Shareware", isCorrect: false },
        { answerText: "Both", isCorrect: false },
        { answerText: "None of these", isCorrect: false },
      ],
    },
    {
      questionText:
        "Flutter is used to develop applications for __________ and __________.",
      answerOptions: [
        { answerText: "Android", isCorrect: false },
        { answerText: "iOS", isCorrect: false },
        { answerText: "both", isCorrect: true },
        { answerText: "None", isCorrect: false },
      ],
    },
    {
      questionText:
        "The first version of Flutter was known as codename __________ and ran on the Android operating system.",
      answerOptions: [
        { answerText: "Sky", isCorrect: true },
        { answerText: "Cloud", isCorrect: false },
        { answerText: "Rain", isCorrect: false },
        { answerText: "None", isCorrect: false },
      ],
    },
    {
      questionText: "Flutter is written in ____.",
      answerOptions: [
        { answerText: "C", isCorrect: false },
        { answerText: "C++", isCorrect: false },
        { answerText: "Dart", isCorrect: false },
        { answerText: "All of these", isCorrect: true },
      ],
    },
    {
      questionText:
        "Flutter's engine, written primarily in C++, provides low-level rendering support using Google's Skia graphics library.",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
        { answerText: "Probably True", isCorrect: false },
        { answerText: "Probably False", isCorrect: false },
      ],
    },
    {
      questionText:
        "Flutter apps are written in the __________ language and make use of many of the language's more advanced features.",
      answerOptions: [
        { answerText: "C", isCorrect: false },
        { answerText: "Java", isCorrect: false },
        { answerText: "Dart", isCorrect: true },
        { answerText: "Swift", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following are major components of Flutter?",
      answerOptions: [
        { answerText: "Dart Platform", isCorrect: false },
        { answerText: "Flutter Engine", isCorrect: false },
        { answerText: "Flutter Dev Tols", isCorrect: false },
        { answerText: "All of above", isCorrect: true },
      ],
    },
    {
      questionText:
        "Due to App Store restrictions on dynamic code execution, Flutter apps use __________ compilation on iOS.",
      answerOptions: [
        { answerText: "ahead-of-time (AOT)", isCorrect: true },
        { answerText: "ahed-of-code (AOC)", isCorrect: false },
        { answerText: "Both", isCorrect: false },
        { answerText: "None", isCorrect: false },
      ],
    },
    {
      questionText:
        'A notable feature of the Dart platform is its support for "hot reload"',
      answerOptions: [
        { answerText: " True", isCorrect: true },
        { answerText: "False", isCorrect: false },
        { answerText: "Probably True", isCorrect: false },
        { answerText: "Probably False", isCorrect: false },
      ],
    },
    {
      questionText: "Flutter was introduced in year ____.",
      answerOptions: [
        { answerText: "2015", isCorrect: false },
        { answerText: "2019", isCorrect: true },
        { answerText: "2020", isCorrect: false },
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
    <>
      <motion.div
        className='app container-fluid quiz-card'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {showScore ? (
          <div>
            <div className='score-section'>
              <h2>
                You scored {score} out of {questions.length}
              </h2>
            </div>
            <div className='score'>
              {score > 7 ? (
                <a
                  href='https://certificate-flutter.omjadhav3714.repl.co/'
                  className='bt'
                >
                  <button className='btn btn-main'>Get Certificate</button>
                </a>
              ) : (
                <h3>
                  Try Again! You need to score alteast 7 to get the certificate
                </h3>
              )}
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
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
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
    </>
  );
}
//jshint:ignore end

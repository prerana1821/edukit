/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./Quiz.css";

export default function AngularQuiz() {
    const questions = [
        {
            questionText: 'Do AngularJS provide reusable components?',
            answerOptions: [
                { answerText: 'True', isCorrect: false },
                { answerText: 'False', isCorrect: true },
                { answerText: 'Probably True', isCorrect: false },
                { answerText: 'Probably False', isCorrect: false },
            ],
        },
        {
            questionText: ' AngularJS application expressions are pure JavaScript expressions.',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
                { answerText: 'Probably True', isCorrect: false },
                { answerText: 'Probably False', isCorrect: false },
            ],
        },
        {
            questionText: '$http service is used to make an Ajax call to server',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
                { answerText: 'Probably True', isCorrect: false },
                { answerText: 'Probably False', isCorrect: false },
            ],
        },
        {
            questionText: 'Which components can be injected as a dependency in AngularJS?',
            answerOptions: [
                { answerText: 'Application Module', isCorrect: true },
                { answerText: 'constant', isCorrect: false },
                { answerText: 'value', isCorrect: false },
                { answerText: 'factory', isCorrect: false },
            ],
        },
        {
            questionText: 'AngularJS supports inbuilt internationalization for three types of filters currency, date and numbers.',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
                { answerText: 'Probably True', isCorrect: false },
                { answerText: 'Probably False', isCorrect: false },
            ],
        },
        {
            questionText: 'AngularJS applications can run on all major browsers and smart phones including Android and iOS based phones/tablets.',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
                { answerText: 'Probably True', isCorrect: false },
                { answerText: 'Probably False', isCorrect: false },
            ],
        },
        {
            questionText: 'AngularJS uses two way data binding.',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
                { answerText: 'Probably True', isCorrect: false },
                { answerText: 'Probably False', isCorrect: false },
            ],
        },
        {
            questionText: 'AngularJS application expressions are pure JavaScript expressions',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
                { answerText: 'Probably True', isCorrect: false },
                { answerText: 'Probably False', isCorrect: false },
            ],
        },
        {
            questionText: 'Angular JS was released in ?',
            answerOptions: [
                { answerText: "2013", isCorrect: false },
                { answerText: "2015", isCorrect: false },
                { answerText: "2010", isCorrect: true },
                { answerText: "2019", isCorrect: false },
            ],
        },
        {
            questionText: 'Angular Js belongs to which stack ?',
            answerOptions: [
                { answerText: 'MERN', isCorrect: false },
                { answerText: 'MEAN', isCorrect: true },
                { answerText: 'MOON', isCorrect: false },
                { answerText: 'MAEN', isCorrect: false },
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
        <motion.div className="app container-fluid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {showScore ? (
                <div>
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                    <div className='score'>
                        <a href="" className="bt">Get Certificate</a>
                    </div>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button className='btn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    );
}

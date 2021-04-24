/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./Quiz.css";

export default function LaravelQuiz() {
    const questions = [
        {
            questionText: 'Laravel is based on ____________',
            answerOptions: [
                { answerText: 'MVVM Design Pattern', isCorrect: false },
                { answerText: 'MVC Design Pattern', isCorrect: true },
                { answerText: 'Singleton Design Pattern', isCorrect: false },
                { answerText: 'Composite Design Pattern', isCorrect: false },
            ],
        },
        {
            questionText: ' In Laravel Interpolation done by using below which symbol/ file?',
            answerOptions: [
                { answerText: '{{}}', isCorrect: true },
                { answerText: 'helpers', isCorrect: false },
                { answerText: 'compact', isCorrect: false },
                { answerText: 'None of these', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of following Collection method returns all records from Laravel collection?',
            answerOptions: [
                { answerText: '->all()', isCorrect: true },
                { answerText: '->get()', isCorrect: false },
                { answerText: '->where()', isCorrect: false },
                { answerText: '->whereAll()', isCorrect: false },
            ],
        },
        {
            questionText: ' What is @yield used for?',
            answerOptions: [
                { answerText: 'to display the contents of a given section.', isCorrect: true },
                { answerText: 'to extend an layout', isCorrect: false },
                { answerText: 'to include a file', isCorrect: false },
                { answerText: 'All of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'Which one Laravel command line interface?',
            answerOptions: [
                { answerText: 'CLI', isCorrect: false },
                { answerText: 'php artisan', isCorrect: true },
                { answerText: 'composer', isCorrect: false },
                { answerText: 'git', isCorrect: false },
            ],
        },
        {
            questionText: 'Which command is used to start laravel server',
            answerOptions: [
                { answerText: 'php artisan serve', isCorrect: true },
                { answerText: 'php artisan start', isCorrect: false },
                { answerText: 'php artisan start-server', isCorrect: false },
                { answerText: 'php artisan project_name', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of following command is used to remove the compiled class file in Laravel?',
            answerOptions: [
                { answerText: 'php artisan clear-class', isCorrect: false },
                { answerText: 'php artisan clear-compiled', isCorrect: true },
                { answerText: 'php artisan down', isCorrect: false },
                { answerText: 'php artisan inspire', isCorrect: false },
            ],
        },
        {
            questionText: 'How to list all routes by terminal?',
            answerOptions: [
                { answerText: 'php artisan routes', isCorrect: true },
                { answerText: 'php artisan getroutes', isCorrect: false },
                { answerText: 'php artisan route:list', isCorrect: false },
                { answerText: 'php artisan listroutes', isCorrect: false },
            ],
        },
        {
            questionText: 'How to redirect to another page in Laravel?',
            answerOptions: [
                { answerText: "return redirect::toview('/name')", isCorrect: false },
                { answerText: "return redirect::('/name')", isCorrect: false },
                { answerText: "return redirect('/name')", isCorrect: true },
                { answerText: "return redirect:to('/name')", isCorrect: false },
            ],
        },
        {
            questionText: 'What is it Blade?',
            answerOptions: [
                { answerText: 'package', isCorrect: false },
                { answerText: 'Template Engine', isCorrect: true },
                { answerText: 'view file', isCorrect: false },
                { answerText: 'framework', isCorrect: false },
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

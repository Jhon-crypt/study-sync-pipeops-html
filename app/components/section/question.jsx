"use client"
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import Modal from 'react-modal';

function QuizComponentClient({ quiz }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState(Array(quiz.questions.length).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const selectOption = (index) => {
    setUserResponses([...userResponses.slice(0, questionIndex), index, ...userResponses.slice(questionIndex + 1)]);
  };

  const next = () => {
    if (questionIndex < quiz.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const prev = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const score = () => {
    let score = 0;
    userResponses.forEach((response, index) => {
      if (quiz.questions[index].responses[response]?.correct) {
        score++;
      }
    });
    return score;
  };

  const restart = () => {
    setQuestionIndex(0);
    setUserResponses(Array(quiz.questions.length).fill(null));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleQuizCompletion = () => {
    setShowReview(true);
  };

  const isLastQuestion = questionIndex === quiz.questions.length - 1;

  return (
    <section className="container">
      <div className="questionBox" id="app">
        <Transition
          duration={{ enter: 500, leave: 300 }}
          enterActiveClass="animated zoomIn"
          leaveActiveClass="animated zoomOut"
          mode="out-in"
        >
          {questionIndex < quiz.questions.length ? (
            <div className="questionContainer">
              <header>
                <h1 className="title is-6">VueQuiz</h1>
                <div className="progressContainer">
                  <progress className="progress is-info col-12 is-small" value={(questionIndex / quiz.questions.length) * 100} max="100">
                    {(questionIndex / quiz.questions.length) * 100}%
                  </progress>
                  <p>{Math.floor((questionIndex / quiz.questions.length) * 100)}% complete</p>
                </div>
              </header>
              <h2 className="titleContainer title">{quiz.questions[questionIndex].text}</h2>
              <div className="optionContainer">
                {quiz.questions[questionIndex].responses.map((response, index) => (
                  <div
                    className={`option ${userResponses[questionIndex] === index ? 'is-selected' : ''}`}
                    onClick={() => selectOption(index)}
                    key={index}
                    style={{
                      backgroundColor: userResponses[questionIndex] === index ? '#92878B' : '#FFF',
                      borderRadius: '0.5rem',
                      marginBottom: '1rem',
                      padding: '0.6rem',
                      color: '#C9638A', fontWeight: '800'
                    }}
                  >
                    {String.fromCharCode(97 + index)}. {response.text}
                  </div>
                ))}
              </div>
              <footer className="questionFooter">
                <nav className="pagination" role="navigation" aria-label="pagination">
                  <a className="button" onClick={prev} disabled={questionIndex < 1}>
                    Back
                  </a>
                  <a className={`button ${userResponses[questionIndex] === null ? '' : 'is-active'}`} onClick={next} disabled={questionIndex >= quiz.questions.length}>
                    {userResponses[questionIndex] === null ? 'Skip' : 'Next'}
                  </a>
                </nav>
              </footer>
            </div>
          ) : (
            <div className="quizCompleted">
              <span className="icon">
                <i className={`fa ${score() > 3 ? 'fa-check-circle-o is-active' : 'fa-times-circle'}`}></i>
              </span>
              <h2 className="title">You did {score() > 7 ? 'an amazing' : score() < 4 ? 'a poor' : 'a good'} job!</h2>
              <p className="subtitle">Total score: {score()} / {quiz.questions.length}</p>
              <br />
              {isLastQuestion && (
                <>
                  <button className="button" onClick={handleSubmit}>Submit</button>
                  <button className="button" onClick={restart}>Restart <i className="fa fa-refresh"></i></button>
                </>
              )}
            </div>
          )}
        </Transition>
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Quiz Score"
        >
          <h2>Quiz Score</h2>
          <p>Total score: {score()} / {quiz.questions.length}</p>
          <button onClick={closeModal}>Close</button>
          <button onClick={() => setShowReview(true)}>Review Questions</button>
        </Modal>
        {showReview && (
          <div className="reviewQuestions">
            <h2>Review Questions</h2>
            {quiz.questions.map((question, index) => (
              <div key={index}>
                <h3>{question.text}</h3>
                <p>Your answer: {question.responses[userResponses[index]]?.text}</p>
                <p>Correct answer: {question.responses.find(response => response.correct)?.text}</p>
              </div>
            ))}
            <button onClick={() => setShowReview(false)}>Close</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default QuizComponentClient;

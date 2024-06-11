"use client"
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import Modal from 'react-modal';
import QuizCalculator from '../cards/quizCalculator.jsx';
import './quiz.css'

const QuizComponentClient = ({ quiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState(Array(quiz.questions.length).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showCalculatorModal, setShowCalculatorModal] = useState(false);

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

  const handleOpenCalculator = () => {
    setShowCalculatorModal(true);
  };

  const handleCloseCalculator = () => {
    setShowCalculatorModal(false);
  };

  const isLastQuestion = questionIndex === quiz.questions.length - 1;

  return (
    <section className="container w-100">
      <div className='my-4' style={{display: 'flex', justifyContent: 'end', alignItems: 'end', width: '100%'}}>

        <button className="calculatorButton text-white px-3 btn"  onClick={handleOpenCalculator} style={{background: 'linear-gradient(to right, #CB5284, #754968)'}}>Calculator</button>
      </div>
      <div className="questionBox w-100" id="app">
        <Transition
          duration={{ enter: 500, leave: 300 }}
          enterActiveClass="animated zoomIn"
          leaveActiveClass="animated zoomOut"
          mode="out-in"
        >
          {questionIndex < quiz.questions.length ? (
            <div className="questionContainer">
              <header>
              <div className="progressContainer mb-2">
                <progress className="progress col-12 is-small" style={{  }} value={(questionIndex / quiz.questions.length) * 100} max="100">
                  {(questionIndex / quiz.questions.length) * 100}%
                </progress>
                <p className='my-3' style={{fontWeight: '600'}}>QUESTION {questionIndex + 1}/{quiz.questions.length}</p>
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
                      backgroundColor: userResponses[questionIndex] === index ? '#DBC7CF' : '#FFF',
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
                <nav className="pagination d-flex justify-content-between" role="navigation" aria-label="pagination">
                  <button className="button btn px-5 text-white" style={{ background: 'linear-gradient(to right, #CB5284, #754968)' }} onClick={prev} disabled={questionIndex < 1}>
                    Back
                  </button>
                  <button className={`button btn px-5 text-white  ${userResponses[questionIndex] === null ? '' : 'is-active'}`} onClick={isLastQuestion ? handleSubmit : next} style={{ background: 'linear-gradient(to right, #CB5284, #754968)' }}>
                    {isLastQuestion ? 'Submit' : 'Next'}
                  </button>
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
              <button className="button" onClick={handleSubmit}>Submit</button>
              <button className="button" onClick={restart}>Restart <i className="fa fa-refresh"></i></button>
            </div>
          )}
        </Transition>
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Quiz Score"
          style={{
            content: {
              width: '70%',
              height: '60%',
              top: '50%',
              left: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '10px',
              transform: 'translate(-50%, -50%)',
              borderRadius: '15px'
            },
          }}
        >
          {/* <h2>Quiz Score</h2> */}
          
        
          <div className='scoreImg'>
          </div>
          
          <h1 style={{color: '#CB5284', fontWeight: '900', fontSize: '25px'}}>{score()} / {quiz.questions.length}</h1>
          <button className="button btn px-5 text-white" onClick={handleQuizCompletion} style={{ background: 'linear-gradient(to right, #CB5284, #754968)' }}>Review</button>
          <button className="button btn px-5 text-white"  onClick={closeModal}  style={{ background: 'linear-gradient(to right, #CB5284, #754968)' }}>Close</button>
        </Modal>
        {showReview && (
          <div className="modal reviewQuestions container p-3" style={{ display: 'block' }}>
            <div className="modal-content container pb-4">
              <span className="close" style={{float: 'right', width: '100%'}} onClick={() => setShowReview(false)}>&times;</span>
              <h2 className='text-center py-4'>Review Questions</h2>
              {quiz.questions.map((question, index) => (
                <div key={index}>
                  <h5>{question.text}</h5>
                  <p>Your answer: {question.responses[userResponses[index]]?.text}</p>
                  <p>Correct answer: {question.responses.find(response => response.correct)?.text}</p>
                </div>
              ))}
              <button className="button btn px-5 text-white" onClick={() => setShowReview(false)} style={{ background: 'linear-gradient(to right, #CB5284, #754968)' }}>Close</button>
            </div>
          </div>
        )}

        <Modal
          isOpen={showCalculatorModal}
          onRequestClose={handleCloseCalculator}
          contentLabel="Calculator"
          style={{
            content: {
              padding : '0px',
              margin: '0px',
              height: '100%',
              
              
              borderRadius: '15px'
            },
          }}
        >
          <div className="calculatorModalContent p-0 m-0">
           
            {/* Add your calculator component here */}
            <QuizCalculator />
            {/* <div className='w-100 text-center mt-2'>

              <button className='btn px-5 text-white' onClick={handleCloseCalculator}  style={{background: 'linear-gradient(to right, #CB5284, #754968)'}}>Close</button>
            </div> */}
          </div>
        </Modal>
      </div>

    </section>
  );
}

export default QuizComponentClient;

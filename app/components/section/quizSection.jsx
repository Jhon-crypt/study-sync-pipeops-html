import React from 'react';
import QuizComponentClient from './QuizComponentClient';

export default function QuizSection() {
  const quiz = {
    user: "Dave",
    questions: [
      {
        text: "What is the capital of France?",
        responses: [
          { text: "London" },
          { text: "Paris", correct: true },
          { text: "Berlin" },
          { text: "Madrid" }
        ]
      },
      {
        text: "Who painted the Mona Lisa?",
        responses: [
          { text: "Vincent van Gogh" },
          { text: "Leonardo da Vinci", correct: true },
          { text: "Pablo Picasso" },
          { text: "Michelangelo" }
        ]
      },
      {
        text: "What is the chemical symbol for water?",
        responses: [
          { text: "H" },
          { text: "W" },
          { text: "O", correct: true },
          { text: "HO" }
        ]
      },
      {
        text: "What year did the Titanic sink?",
        responses: [
          { text: "1910" },
          { text: "1912", correct: true },
          { text: "1914" },
          { text: "1916" }
        ]
      },
      {
        text: "Who wrote 'To Kill a Mockingbird'?",
        responses: [
          { text: "Stephen King" },
          { text: "Harper Lee", correct: true },
          { text: "J.K. Rowling" },
          { text: "George Orwell" }
        ]
      },
      {
        text: "What is the largest mammal in the world?",
        responses: [
          { text: "Elephant" },
          { text: "Giraffe" },
          { text: "Blue whale", correct: true },
          { text: "Hippo" }
        ]
      },
      {
        text: "What is the square root of 64?",
        responses: [
          { text: "6" },
          { text: "8", correct: true },
          { text: "10" },
          { text: "12" }
        ]
      },
      {
        text: "Which planet is known as the Red Planet?",
        responses: [
          { text: "Venus" },
          { text: "Mars", correct: true },
          { text: "Jupiter" },
          { text: "Saturn" }
        ]
      },
      {
        text: "What is the chemical symbol for gold?",
        responses: [
          { text: "Au", correct: true },
          { text: "Ag" },
          { text: "Cu" },
          { text: "Fe" }
        ]
      },
      {
        text: "Who is the author of '1984'?",
        responses: [
          { text: "George Orwell", correct: true },
          { text: "Aldous Huxley" },
          { text: "Ray Bradbury" },
          { text: "J.R.R. Tolkien" }
        ]
      },
      
    ]
  };
    
  return (
    <>
      <main style={{ height: "100%" }}>
        <div className="container">
          <div className="mt-4 px-2">
            <QuizComponentClient quiz={quiz}/>
          </div>
        </div>
      </main>
    </>
  );
}

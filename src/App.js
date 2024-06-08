import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  { id: 7336, question: "What are the building block", answer: "Components" },
  { id: 8832, question: "What's the name of the", answer: "JSX" },
  {
    id: 1297,
    question: "How to pass data from parent to child",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronized with",
    answer: "Controlled element",
  },
];
function App() {
  return <FlashCards />;
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          onClick={() => handleClick(q.id)}
          className={q.id === selectedId ? "selected" : ""}
        >
          <p>{q.id === selectedId ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}
export default App;

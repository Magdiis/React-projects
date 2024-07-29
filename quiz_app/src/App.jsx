import { useEffect } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizQuestionsProvider from "./store/quiz-questions-context";


function App() {

  return (
    <>
      <Header></Header>
      <QuizQuestionsProvider>
        <Quiz></Quiz>
      </QuizQuestionsProvider>
    </>
  
  )
     
}

export default App;

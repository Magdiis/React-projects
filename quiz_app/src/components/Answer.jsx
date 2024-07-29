import { useContext, useRef, useState } from "react"
import { QuizQuestionsContext } from "../store/quiz-questions-context"




export default function Answer({ children, }) {
    const { saveAnswer, quiz, nextQuestion, changeStateToAnswered } = useContext(QuizQuestionsContext)
    const [buttonClass, setButtonClass] = useState(undefined)

    const button = useRef()

    function handleClickAnswer() {
        if(quiz.state === 'ANSWERING'){
            setButtonClass('selected')
            changeStateToAnswered()
            setTimeout(()=>{
            const correct = children === quiz.currentQuestion.correctAnswer ? 'correct' : 'wrong'
            setButtonClass(correct)
            saveAnswer({ isCorrect: correct, question: quiz.currentQuestion.text, answer: children })
            setTimeout(()=>{
                setButtonClass(undefined)
                button.current.blur()
                nextQuestion()
            }, 3000)
        }, 3000)
        }
           
    }

    return (
        <div className="answer">
            <button ref={button} className={buttonClass} onClick={handleClickAnswer}>{children}</button>
        </div>
    )
}
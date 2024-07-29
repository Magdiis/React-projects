import { useContext, useEffect } from "react";
import { QuizQuestionsContext } from "../store/quiz-questions-context";
import Answer from "./Answer";
import Progress from "./Progress";
import Summary from "./Summary";

export default function Quiz() {
    const { quiz, saveAnswer, nextQuestion, shuffleAnswers } = useContext(QuizQuestionsContext)


    useEffect(() => {
        if (quiz.state === 'ANSWERING') {
            
            const timeout = setTimeout(() => {
                saveAnswer({ isCorrect: 'skipped', question: quiz.currentQuestion.text, answer: 'Skipped answer' })
                nextQuestion()
            }, 3000)

            return (() => {
                clearTimeout(timeout)
            })
        }

    }, [nextQuestion]) 
    
    useEffect(()=>{
        shuffleAnswers()
    },[])
    

    const content = (quiz.currentQuestion === undefined)
        ?
        <Summary result={quiz.result}></Summary>
        :
        <div id="quiz">
            <div id="question">
                <Progress timer={3000}></Progress>
                <h2>{quiz.currentQuestion.text}</h2>
            </div>
            <div id="answers">
                {quiz.currentQuestion.answers.map((answer, index) => (
                    <Answer key={index}>{answer}</Answer>
                ))}
            </div>
        </div>

    return <>
        {content}
    </>

}
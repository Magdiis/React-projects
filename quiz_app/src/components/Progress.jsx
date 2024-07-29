import { useEffect, useState } from "react";
import { useContext } from "react";
import { QuizQuestionsContext } from "../store/quiz-questions-context";

export default function Progress({timer}){
    const {nextQuestion, saveAnswer} = useContext(QuizQuestionsContext)
    const [remainingTime, setRemainingTime] = useState(timer)
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime(prev => prev - 10)
        },10)

        return ()=>{
            clearInterval(interval)
            setRemainingTime(timer)
        }
    }, [nextQuestion, saveAnswer])

    return <progress value={remainingTime} max={timer}></progress>
}
import { createContext, useCallback, useEffect, useState } from "react";
import QUESTIONS from '../question'


export const QuizQuestionsContext = createContext({
    questions: [],
    quiz: {
        currentQuestion: {id: '', text: '', answers: [], correctAnswer:''}, 
        index: 0, 
        result: { 
            CORRECT_ANSWERS: 0, 
            WRONG_ANSWERS: 0,
            SKIPPED_ANSWERS: 0,
            answers: []
        }, 
        state: '',
    },
    nextQuestion: () => {},
    saveAnswer: () => {},
    changeStateToAnswered: ()=>{},
    shuffleAnswers: ()=>{},
    restartQuiz: ()=>{}
})



export default function QuizQuestionsProvider({children}){

    const [quiz, setQuiz] = useState({
        currentQuestion: {...QUESTIONS[0]},
        index: 0,
        result: {
            CORRECT_ANSWERS: 0,
            WRONG_ANSWERS: 0,
            SKIPPED_ANSWERS: 0,
            answers: []
        },
        state: 'ANSWERING'
    })

    

    const nextQuestion = useCallback(function nextQuestion(){ // question, user's answer, isCorrect
        if(quiz.index < 6){
            setQuiz(prevQuestions => {
                let index = prevQuestions.index + 1
                return {
                    ...prevQuestions,
                    currentQuestion: {
                        ...QUESTIONS[index],
                        answers: shuffle(QUESTIONS[index].answers)
                    },
                    index: index,
                    state: 'ANSWERING'
                }
            })
        } else {
            setQuiz (prev => {
                return {
                    ...prev,
                    currentQuestion: undefined,
                    index: 0,
                    state:'ANSWERED'
                }
            })
        }
    })

   

    const saveAnswer = useCallback(function saveAnswer(answer){
        setQuiz(prev => {
            let quiz = {...prev}
            if (answer.isCorrect === 'correct'){
                quiz.result.CORRECT_ANSWERS = prev.result.CORRECT_ANSWERS + 1
            }
            else if (answer.isCorrect === 'wrong'){
                quiz.result.WRONG_ANSWERS = prev.result.WRONG_ANSWERS + 1
            }
            else if (answer.isCorrect === 'skipped'){
                quiz.result.SKIPPED_ANSWERS = prev.result.SKIPPED_ANSWERS + 1
            }
            return {
                ...prev,
                result: {
                    ...quiz.result,
                    answers: [...quiz.result.answers, {question: answer.question, answer: answer.answer, correct: answer.isCorrect}]
                }
            }
        })
    })
   
    function changeStateToAnswered(){
        setQuiz(prev => {
            return {
                ...prev, 
                state: "ANSWERED"
            }
        })
    }
 
    function shuffle(array) {
        let currentIndex = array.length;
    
        while (currentIndex != 0) {
    
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array
    }

    function shuffleAnswers(){
        setQuiz(prev => {
            return {
                ...prev,
                currentQuestion: {
                    ...prev.currentQuestion,
                    answers: shuffle(prev.currentQuestion.answers)
                }
            }
        })
    }

    function restartQuiz(){
        setQuiz({
            currentQuestion: {...QUESTIONS[0]},
            index: 0,
            result: {
                CORRECT_ANSWERS: 0,
                WRONG_ANSWERS: 0,
                SKIPPED_ANSWERS: 0,
                answers: []
            },
            state: 'ANSWERING'
        })
    }
   

    const ctxValue = {
        questions: QUESTIONS,
        quiz: quiz,
        nextQuestion: nextQuestion,
        saveAnswer: saveAnswer,
        changeStateToAnswered: changeStateToAnswered,
        shuffleAnswers: shuffleAnswers,
        restartQuiz: restartQuiz
    }

    


    
    return <QuizQuestionsContext.Provider value={ctxValue}> 
        {children}
    </QuizQuestionsContext.Provider>
  
}
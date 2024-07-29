import { useContext } from 'react'
import quiz_complete from '../assets/quiz-complete.png'
import SummaryScore from './SummaryScore'
import UserAnswer from './UserAnswer'
import { QuizQuestionsContext } from '../store/quiz-questions-context'

export default function Summary({ result }) {
    const {restartQuiz} = useContext(QuizQuestionsContext)

    function calculateScore(answered) {
        console.log(answered)
        return Math.round((answered / 7) * 100)
    }
    console.log(result)


    return <div id="summary">
        <img src={quiz_complete}></img>
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <SummaryScore number={calculateScore(result.SKIPPED_ANSWERS)} text="skiped"> </SummaryScore>
            <SummaryScore number={calculateScore(result.CORRECT_ANSWERS)} text="aswered correctly"> </SummaryScore>
            <SummaryScore number={calculateScore(result.WRONG_ANSWERS)} text="answered incorrectly"> </SummaryScore>
        </div>
        <ol>
            {result.answers.map((answer, index) => (
                <UserAnswer key={index} question={answer.question} questionNumber={index + 1} answer={answer.answer} correct={answer.correct}></UserAnswer>
            ))}
            <div className='answer'>
                <button onClick={restartQuiz}>Restart</button>
            </div>
        </ol>
    </div>
}
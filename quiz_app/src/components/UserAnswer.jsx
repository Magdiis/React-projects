export default function UserAnswer({ questionNumber, question, answer, correct }) {
    
    let answerClassName = `user-answer ${correct}`
    return <li>
        <h3>{questionNumber}</h3>
        <p className="question">{question}</p>
        <p className={answerClassName}>{answer}</p>
    </li>

}
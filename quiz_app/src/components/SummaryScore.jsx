export default function SummaryScore({...props}){

    return <p>
        <span className="number">{props.number}%</span>
        <span className="text">{props.text}</span>
    </p>
}
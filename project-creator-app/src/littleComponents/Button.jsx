export default function Button({ description, onClick, isLight }) {
    let colors = isLight ? ' bg-stone-700 hover:bg-stone-600' : ' bg-stone-900 hover:bg-stone-800'
    const className = "rounded-md py-2 px-4 m-2 text-white" + colors
    return (
        <button onClick={onClick} className={className}>{description}</button>
    )
}
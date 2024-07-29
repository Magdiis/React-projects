export default function TextButton({description, onClick, isLight}){
    let colors = isLight ? 'text-white hover:bg-stone-100' : 'text-black hover:bg-stone-200'
    const className = "rounded-md py-2 px-4 m-2 " + colors
    return (
        <button onClick={onClick} className={className}>{description}</button>
    )
}
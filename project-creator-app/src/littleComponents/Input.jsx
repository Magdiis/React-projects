export default function Input({label, type, value, onChange, what}){
    return (
        <div className="w-full  p-2">
        <label htmlFor="input-field" className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <input value={value} onChange={(event)=>{onChange(event, what)}} id="input-field" type={type} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-stone-500"/>
        </div>
    )
}
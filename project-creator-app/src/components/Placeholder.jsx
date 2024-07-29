import projectImg from '../assets/no-projects.png'
import Button from '../littleComponents/Button'

export default function Placeholder({showProjectForm}){
    return (
        <div className='flex flex-col items-center'>
            <img className='size-16 m-5' src={projectImg}/>
            <h1 className='text-xl font-semibold mb-3'>No Project Selected</h1>
            <p className='text-base font-thin text-slate-800 mb-5'>Select a project or get started with a new one</p>
            <Button isLight="false" description="Create new project" onClick={()=>{showProjectForm(true)}}></Button>
        </div>
    )
}
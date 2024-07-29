import { useState } from "react";
import TextButton from "../littleComponents/TextButton";
import Input from "../littleComponents/Input";
export default function SelectedProject({ project, saveTask, removeTask, removeProject }) {
    const [taskInput, setTaskInput] = useState("")


    function onChange(event) {
        setTaskInput(event.target.value)
    }

    function handleSaveButton() {
        if (taskInput.trim().length > 0) {
            saveTask(taskInput)
            setTaskInput("")
        }
    }


    return (
        <>
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">{project.title}</p>
                <TextButton isLight={false} description="Delete" onClick={removeProject}></TextButton>
            </div>
            <p className="font-thin text-slate-800">{project.date}</p>
            <p className="pt-3">{project.description}</p>
            <hr className="my-5 border-2"></hr>
            <p className="text-xl font-semibold">Tasks</p>
            <div className="flex">
                <Input className="flex-none" type="text" value={taskInput} onChange={onChange}></Input>
                <TextButton onClick={handleSaveButton} className="whitespace-nowrap" description="Add task"></TextButton>
            </div>

            {project.tasks && project.tasks.map((task) => (
                <div key={task.id} className="flex justify-between items-center bg-stone-100 px-4 py-2 mb-2">
                    <p >{task.task}</p>
                    <TextButton onClick={() => { removeTask(task.id) }} description="Clear"></TextButton>
                </div>

            ))}
        </>
    )
}
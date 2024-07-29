import { useState } from "react";
import Button from "../littleComponents/Button";
import Input from "../littleComponents/Input";
import TextButton from "../littleComponents/TextButton";

export default function AddProjectForm({ showProjectForm, addProject, }) {

    const [form, setForm] = useState({
        title: "",
        description: "",
        date: "",
        errorMessage: ""
    })

    function handleSaveClick() {
        if (form.title.trim().length < 1 ||
            form.description.trim().length < 1 ||
            form.date.trim().length < 1) {
            setForm(prevForm => ({...prevForm, errorMessage: "Something is empty."}))
        } else {
            addProject(form)
            showProjectForm(false)
        }
    }

    function onChange(event, what) {
        setForm(prevForm => {
            let oldForm = { ...prevForm }
            oldForm[what] = event.target.value
            return oldForm
        })
    }

    return (
        <>
            <div className="flex justify-end">
                <TextButton onClick={() => { showProjectForm(false) }} isLight={false} description="Cancel"></TextButton>
                <Button onClick={handleSaveClick} isLight={false} description="Save"></Button>
            </div>

            <Input what="title" onChange={onChange} value={form.title} type="text" label="Title" ></Input>
            <Input what="description" onChange={onChange} value={form.description} type="text" label="Description" ></Input>
            <Input what="date" onChange={onChange} value={form.date} type="date" label="Due date"></Input>
            {form.errorMessage && <p className="text-center text-base font-semibold my-2 text-red-800">{form.errorMessage}</p>}
        </>
    )
}
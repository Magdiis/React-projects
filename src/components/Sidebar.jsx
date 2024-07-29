import Button from "../littleComponents/Button";

export default function Sidebar({ onClickAddProjectButton, projects, selectProject, cleanSelected, selectedProject }) {

    function handleOnClick() {
        onClickAddProjectButton(true)
        cleanSelected()
    }
    return (
        <>
            <h1 className="m-2 text-2xl font-bold">Your projects</h1>
            <Button onClick={handleOnClick} isLight="true" description="+ Add Project"></Button>
            {projects.map((project) => {
                let buttonClass = "m-2 px-2 py-1 hover:bg-stone-800 rounded-md"

                if (selectedProject) {
                    if (project.id === selectedProject.id) {
                        buttonClass = buttonClass.concat(" bg-stone-800")
                    }
                }

                return <p key={project.id} onClick={() => { selectProject(project) }}
                    className={buttonClass}>{project.title}</p>
            })}
        </>

    )
}
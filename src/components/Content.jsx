
import AddProjectForm from './AddProjectForm'
import Placeholder from './Placeholder'
import SelectedProject from './SelectedProject'

export default function Content({ showProjectForm, createProject, addProject, selectedProject, saveTask, removeTask, removeProject }) {
    let content = <Placeholder showProjectForm={showProjectForm}></Placeholder>
    if (selectedProject) {
        content = <SelectedProject removeProject={removeProject} removeTask={removeTask} saveTask={saveTask} project={selectedProject}></SelectedProject>
    } else {
        if (createProject) {
            content = <AddProjectForm addProject={addProject} showProjectForm={showProjectForm}></AddProjectForm>
        } else {
            content = <Placeholder showProjectForm={showProjectForm}></Placeholder>
        }
    }

    return (
        <>
            {content}
        </>
    )
}
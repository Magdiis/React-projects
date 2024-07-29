import Content from "./components/Content";
import Sidebar from "./components/sidebar";
import { useState } from "react";

let projects = []

function App() {
  const [createProject, setCreateProject] = useState(false)
  const [selectedProject, setSelectedProject] = useState()

  function showProjectForm(show) {
    setCreateProject(show)
  }

  function addProject(project) {
    project.tasks = []
    project.id = calculateId(projects)
    projects.push(project)
    console.log(projects)
  }

  function calculateId(array) {
    if (array.length > 0) {
      return array.at(-1).id + 1
    } else {
      return 0
    }
  }



  function selectProject(project) {
    setSelectedProject(project)
  }

  function cleanSelected() {
    setSelectedProject(undefined)
  }

  function saveTask(task) {
    setSelectedProject(prevProject => {
      let project = { ...prevProject }
      const id = calculateId(project.tasks)
      project.tasks.push({
        id: id,
        task: task
      })
      return project
    })
  }

  function removeTask(id) {
    const filteredTasks = selectedProject.tasks.filter(task => task.id !== id)
    projects[selectedProject.id].tasks = filteredTasks
    console.log(projects)
    setSelectedProject(prevProject => {
      return {
        ...prevProject,
        tasks: filteredTasks
      }
    })
  }

  function removeProject() {
    projects = projects.filter(project => project.id !== selectedProject.id)
    showProjectForm(false)
    setSelectedProject(undefined)
  }

  return (
    <>
      <div className="h-screen">
        <div className="flex w-full h-full">
          <div className=" rounded-tr-lg w-1/4 h-full p-4 mt-10 bg-stone-900 text-white">
            <Sidebar selectedProject={selectedProject} cleanSelected={cleanSelected} selectProject={selectProject} projects={projects} onClickAddProjectButton={showProjectForm}></Sidebar>
          </div>
          <div className="w-3/4 p-4  text-black mt-20 pl-10">
            <Content removeProject={removeProject} removeTask={removeTask} saveTask={saveTask} selectedProject={selectedProject} addProject={addProject} showProjectForm={showProjectForm} createProject={createProject} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

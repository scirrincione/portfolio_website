import { useState } from 'react'
import '../App.css'
import NavBar from '../NavBar.jsx'

function Projects() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <div className="bg-bgColor min-h-screen flex flex-col rounded border-5 border-borderColor border-rounded">
          <header className="p-8 text-left bg-bgColor2 flex justify-between items-center border-b-5 border-borderColor">
            <h1 className="text-3xl text-textColor font-bold">Projects</h1>
          </header>
          <div className="p-4 text-textColor">
            <header className="text-2xl font-bold text-left p-2 border-borderColor2 border-b-2">My Projects</header>
            <p className="p-2 text-l">
              Here are some of the projects I have worked on:
            </p>
            <ul className="list-disc list-inside p-2">
              <li className="p-2">Project 1: Description of project 1</li>
              <li className="p-2">Project 2: Description of project 2</li>
              <li className="p-2">Project 3: Description of project 3</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Projects

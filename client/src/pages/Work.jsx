import React, { useState } from 'react'
import '../App.css'
import NavBar from '../NavBar.jsx'
import data_vis from '../assets/ocean_visualizer.png'
import sn1 from '../assets/student_need1.png'
import sn2 from '../assets/student_need2.png'
import sn3 from '../assets/student_need3.png'
import sn4 from '../assets/student_need4.png'

function Work() {
  //const [count, setCount] = useState(0)
  const work = [
    {
        name: "Volunteer Software Developer", 
        company: "Seeds of Success", 
        date: ["November 2024", "Current"], 
        description: [
                      "Collaborated with a team of developers to create an AI chatbot to help users find and connect with mental health resources.",
                      "Completed tickets on both frontend and backend of website to create components and connect to the database.", 
                      "Utilized React, TypeScript, and SQL to create a user-friendly interface and save previous chats.",
                      "Participated in weekly meetings to discuss progress and plan future work, contributed ideas and feedback to improve the website and chatbot."
                    ]
    },
    {
        name: "Computer Science Teaching Assistant", 
        company: "University of Minnesota", 
        date: ["January 2023", "May 2024"], 
        description: [
                      "Collaborated with a team of 20 TAs to grade, host weekly office hours, and design assignments that resulted in 30-50% of students receiving ‘A’s in the course over 3 semesters.",
                      "Debugged an average of 10 programs, made up of 100 - 900 lines of code each, per week in C++ to aid 100+ students in learning and overall passing the course.", 
                      "Approved and advised 60 students on 20+ final projects consisting of coding extensions onto a larger existing program in a pseudo-industry development environment using software design patterns and writing code in formatting compliant annotation."
                    ]
    },
    {
        name: "Software Developer Internship", 
        company: "Allstate", 
        date: ["May 2022", "August 2022"], 
        description: [
                      "Applied Agile Scrum methodology using Digital.ai Agility with a team of 15 people to add 3 pipelines for movement of information on an unstructured data platform in Python which granted external companies private access to collaborate with Allstate by facilitating the flow of allowable data. ",
                      "Submitted code merge requests on Github while reviewing requests on AWS and managing integrations via Jenkins.", 
                      "Assisted in code deployment by testing in a development environment, uploading, running, and debugging on the spot for a live code push after hours. ",
                      "Completed onboarding and adoption onto the Unstructured Data Platform Development team joining in on daily scrums, weekly meetings, and gaining full internal platform access. "
                    ]
    },
    {
        name: "Tour-Attendant-Photographer-Handler", 
        company: "Alaska Icefield Expeditions", 
        date: ["May 2024", "August 2024"], 
        description: [
                      "Demonstrated strong partnership and communication with a team of 23 crew-members to run a camp of 280 dogs that performed sled dog tours for 1200 tourists on a weekly basis. ",
                      "Completed daily dog-care and camp maintenance in high-stress conditions resulting in top conditions for crew-members and tourists with minimal injuries.", 
                      "Managed and led crew-members in caring for yards when their usual caretakers were unable to by ensuring the yards were clean and the dogs were fed and medicated.",
                    ]
    },
    
  ]

  return (
    <>
        <div className="bg-bgColor min-h-screen flex flex-col rounded border-5 border-borderColor border-rounded pb-8">
        <header className="p-8 text-left bg-bgColor2 flex justify-between items-center border-b-5 border-borderColor">
            <h1 className="text-3xl font-bold">Education</h1>
          </header>
          <div className = "text-center justify-between flex flex-wrap">
            <div className = "pl-3 pr-3 pt-2 font-extrabold underline">
                Bachelors of Science in Computer Science
            </div>
            <div className = "pl-3 pr-3 pt-2">
                September 2020 - May 2024
            </div>
          </div>
          <div className = "text-center justify-between flex flex-wrap">
            <div className = "pl-6 pr-3">
                University of Minnesota
            </div>
            <div className = "pl-6 pr-3">
                GPA: 3.5
            </div>
          </div>

          <div className = "text-center justify-between flex flex-wrap">
            <div className = "pl-3 pr-3 pt-2 font-extrabold underline">
                Masters of Science in Computer Science
            </div>
            <div className = "pl-3 pr-3 pt-2">
                September 2023 - May 2025
            </div>
          </div>
          <div className = "text-center justify-between flex flex-wrap">
            <div className = "pl-6 pr-3">
                University of Minnesota
            </div>
            <div className = "pl-6 pr-3">
                GPA: 3.5
            </div>
          </div>
          <header className="p-8 text-left bg-bgColor2 flex justify-between items-center border-b-5 border-borderColor border-t-5">
            <h1 className="text-3xl font-bold">Work Experience</h1>
          </header>
          <div className = "pl-3 pr-3 pt-2">
            {work.map(job => {
                return (
                    <React.Fragment key={job.name}>
                        <header className="text-xl flex flex-wrap text-left font-bold p-3 justify-between border-b-2 border-borderColor items-center">
                            <h1>{job.name} at {job.company}</h1>
                            <h2>{job.date.join(" - ")}</h2>
                        </header>
                        <ul style={{listStyleType: 'disc'}}>
                            {job.description.map(desc => {
                                return (
                                    <li key = {desc} className="pl-5 pt-4">{desc}</li>
                                )
                            })}
                        </ul>
                    </React.Fragment>
                )
            })}
          </div>
          
        </div>
    </>
  )
}

export default Work

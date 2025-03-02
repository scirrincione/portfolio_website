import { useState } from 'react'
import '../App.css'
import NavBar from '../NavBar.jsx'
import data_vis from '../assets/ocean_visualizer.png'
import sn1 from '../assets/student_need1.png'
import sn2 from '../assets/student_need2.png'
import sn3 from '../assets/student_need3.png'
import sn4 from '../assets/student_need4.png'

function Projects() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <div className="bg-bgColor min-h-screen flex flex-col rounded border-5 border-borderColor border-rounded">
          <header className="p-8 text-left bg-bgColor2 flex justify-between items-center border-b-5 border-borderColor">
            <h1 className="text-3xl font-bold">Projects</h1>
          </header>
          <div className="p-4 flex flex-col">
            <header className="text-2xl flex text-left font-bold border-borderColor2 border-b-2 justify-between items-center pl-2">
              Ocean Visualizer
            <a href={"https://github.com/scirrincione/ocean_visualizer_5609/tree/main"}
                            target="_blank"
                            rel="noopenter noreferrer"
                            className={"font-bold pr-3 underline"}>
                                Github
                            </a></header>
            <p className="p-2 text-l">
              I completed this project in CSCI 5609: Visualization. I worked together with two classmates and we collaborated
              to create a program using the Processing coding language that could visualize temperature, oxygen, pH, and chlorophyll 
              levels in the ocean during different years. The goal of this program was to be able to see how these levels have changed 
              over time due to climate change and to do so in a way that was visually appealing and easy to understand. The program 
              used data the World Ocean Database and rendered datapoints on the map with size based on the value of the variable (the 
              size was relative to the maximum value of the variable) with color relative to the variable it was represented. Different 
              variables could be selected to be displayed by the user and the user could transition linearly through the years. In 
              addition, the user could select the portion of the map in order to graph the data in that region by year or by temperature 
              for the current year selected.
            </p>
            <img src={data_vis} alt="Ocean Visualizer" className="p-2 pb-15" />
            
            <header className="text-2xl flex text-left font-bold border-borderColor2 border-b-2 justify-between items-center pl-2">
              Student Need Organizer: Hack the Gap 2025
            <a href={"https://github.com/IkeAlmighty/hack-the-gap"}
                            target="_blank"
                            rel="noopenter noreferrer"
                            className={"font-bold pr-3 underline"}>
                                Github
                            </a></header>
            <p className="p-2 text-l">
              During the 2025 Hack the Gap hackathon, I worked in a team of four in order to create an application to help teachers
              organize information about students with IEPs, or individualized education plans. However, these plans only include legal
              requirements, and there are often tactics teachers use outside of this plan that can help the student. The idea for this 
              application was to provide a clean interface where a teacher could create and share student profiles with other teachers
              as well as parents so each person in the student's life could share what they notice the student struggles with as 
              well as helpful strategies. The pictures below show the work that we managed to finish
              during the hackathon, including a main page where the teacher could see all the students they work with, a specific student 
              profile page, a working add button for the tags (needs) the student has, and a page showing information about a specific tag
            </p>
            <header className="text-lg border-b-2 border-borderColor">Main Page</header>
            <img src={sn1} alt="Main page" className="p-2" />
            <header className="text-lg border-b-2 border-borderColor">Student Profile</header>
            <img src={sn2} alt="Main page" className="p-2" />
            <header className="text-lg border-b-2 border-borderColor">Adding Tag</header>
            <img src={sn3} alt="Main page" className="p-2" />
            <header className="text-lg border-b-2 border-borderColor">Tag Page</header>
            <img src={sn4} alt="Main page" className="p-2 pb-15" />

            <header className="text-2xl flex text-left font-bold border-borderColor2 border-b-2 justify-between items-center pl-2">
              Researching Social Media Responses Cross-Culturally
            <a href={"https://github.com/scirrincione/researchRepo"}
                            target="_blank"
                            rel="noopenter noreferrer"
                            className={"font-bold pr-3 underline"}>
                                Github
                            </a></header>
            <p className="p-2 text-l">
              I am currently working on a research project with a professor at the University of Minnesota. The goal of this project is 
              to analyze how people respond to distressing tweets on social media and how those responses vary across cultures. We are 
              using a dataset of tweets from a previous project that are classified as being from depressed users. We are using datasets 
              of tweets from several different countries (Australia, India, Nigeria, Philippines, South Africa, UK, United States) and 
              scraping the metadata of the tweets as well as the responses to the tweets and their metadata. So far I have been working 
              on data collection and I am beginning the analysis portion of the project.
            </p>
            
          </div>
          
        </div>
    </>
  )
}

export default Projects

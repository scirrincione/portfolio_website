import { useState } from 'react'
import '../App.css'
import NavBar from '../NavBar.jsx'
import profile from '../assets/linked_in_profile.jpg'

function Home() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <div className="bg-bgColor flex flex-wrap rounded border-5 border-borderColor border-rounded">
          <header className="w-full text-left bg-bgColor2 flex justify-between items-center border-b-5 border-borderColor pr-4">
            <img src={profile} alt="Profile" className="h-40 border-r-5 border-borderColor"/>
            <h1 className="text-3xl font-bold">Sofia Cirrincione</h1>
            <div className="text-right">
              <h1 className="text-l ">847-284-8385</h1>
              <h1 className="text-l">sccirrincione@gmail.com</h1>
            </div>
          </header>
          <div className="p-4 ">
            <header className="text-2xl font-bold text-left p-2 border-borderColor2 border-b-2">About</header>
            <p className="pt-2 pl-1 text-l">
            My name is Sofia, I hold a bachelor's degree in computer science and am currently pursuing a research master's in the field. 
            My expertise lies in software engineering, and I also enjoy game development, which I was inspired to 
            explore due to my love for gaming. <br /><br />
            
            Beyond coding, I’m deeply passionate about mental health. I volunteer with a nonprofit to develop an AI 
            chatbot that helps connect people with mental health resources. My current research focuses on social media, 
            analyzing how people respond to distressing tweets and how those responses vary across cultures.<br /><br />
            
            I’m proficient in Python, C, C++, C#, Java, React, TypeScript, SQL, OCaml, and GitHub. I thrive 
            in collaborative environments, where I can bounce ideas off teammates to create something amazing. I always enjoy a
            challenge and I love learning new things.<br /><br />
            
            When I’m not coding, you can find me knitting, spending time with my dog, or diving into games like Dead by Daylight, 
            Helldivers, and Stardew Valley. <br /><br />
            </p>
            <header className="text-xl font-bold text-center p-2 border-borderColor2 border-b-2 pt-6 space-y-5">Skills</header>
            <p className="p-2 text-center">
            Fluent in Java, Python, C, OCaml, C++, SQL, TypeScript, React ◦ Experienced in Github, Jenkins, AWS, Scrum methodology
             ◦ Comfortable with Microsoft Office and Google Drive ◦ Strong problem solving, communication and teamwork skills 
            </p>
          </div>
        </div>
    </>
  )
}

export default Home

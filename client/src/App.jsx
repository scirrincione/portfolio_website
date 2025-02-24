import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-bgColor min-h-screen flex flex-col rounded border-5 border-borderColor border-rounded">
      <header className="p-8 text-left bg-bgColor2 flex justify-between items-center border-b-5 border-borderColor">
        <h1 className="text-3xl text-textColor font-bold">Sofia Cirrincione</h1>
        <div className="text-right">
          <h1 className="text-l text-textColor">847-284-8385</h1>
          <h1 className="text-l text-textColor">sccirrincione@gmail.com</h1>
        </div>
      </header>
      <div className="p-4 text-textColor">
        <header className="text-2xl font-bold text-left p-2 border-borderColor2 border-b-2">About</header>
        <p className="p-2 text-l">
          this is a test
        </p>
      </div>
      

    </div>
  )
}

export default App

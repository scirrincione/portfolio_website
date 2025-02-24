import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-bgColor min-h-screen flex flex-col">
      <header className="p-4 text-left bg-bgColor2 rounded justify-between">
        <h1 className="text-3xl text-textColor">Sofia Cirrincione</h1>
        <h1 className="text-l text-textColor text-right">847-284-8385</h1>
        <h1 className="text-l text-textColor text-right">sccirrincione@gmail.com</h1>
      </header>

    </div>
  )
}

export default App

import { useState } from 'react'
import { Timer } from './assets/components/timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Timer></Timer>
      
    </>
  )
}

export default App

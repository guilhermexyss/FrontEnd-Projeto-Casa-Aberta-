import { useState } from 'react'
import { PageMain } from './pages/PageMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PageMain></PageMain>
    </>
  )
}

export default App

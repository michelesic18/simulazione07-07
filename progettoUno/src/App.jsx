import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import People from './components/people'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <People />
    </>
  )
}

export default App

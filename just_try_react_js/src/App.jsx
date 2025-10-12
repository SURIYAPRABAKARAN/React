import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DummyFile from './components/DummyFile'

function App() {
  const [count, setCount] = useState(0)

  return <>
  <DummyFile />
  </>
}

export default App

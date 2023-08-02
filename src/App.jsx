import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayoutComponent from './components/LayoutComponent'
import LayoutComponentTwo from './components/LayoutComponentTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app">
        <h2>Hello</h2>
        <LayoutComponent></LayoutComponent>
        <LayoutComponentTwo></LayoutComponentTwo>
      </div>
  )
}

export default App

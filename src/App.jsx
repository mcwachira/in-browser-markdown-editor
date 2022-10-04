import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MarkDownEditor from './components/Markdown-Editor/MarkDownEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
 
      <div>
     <MarkDownEditor/>
    </div>
  )
}

export default App

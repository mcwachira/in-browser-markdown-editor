import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MarkDownEditor from './components/Markdown-Editor/MarkDownEditor'
import { MarkDownOutput } from './components/Markdown=Preview/Markdown-preview.styles'
import MarkDownPreview from './components/Markdown=Preview/MarkDown-preview'

function App() {
  const [count, setCount] = useState(0)

  return (
 
      <div style={{display:'flex'}}>
     <MarkDownEditor/>
     <MarkDownPreview/>
    </div>
  )
}

export default App

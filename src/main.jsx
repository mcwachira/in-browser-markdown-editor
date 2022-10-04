import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {MarkDownProvider } from './context/Markdown-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <MarkDownProvider>
      <App />
  </MarkDownProvider>
 
  </React.StrictMode>
)

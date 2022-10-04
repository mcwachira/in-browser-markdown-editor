
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'

function App() {

  return (
 <>
  <Routes>
  <Route path='/' element={<Navigation/>}>
          <Route index={true} element={<Home />} />
  </Route>
 
  </Routes>
 </>
  )
}

export default App

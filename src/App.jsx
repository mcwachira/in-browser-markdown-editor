
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'
import Authentication from './routes/Authentication/Authentication'
import EditMarkdown from './routes/Edit-Markdown/Edit-Markdown'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
 <>
  <Routes>
  <Route path='/' element={<Navigation/>}>
          <Route index={true} element={<Home />} />
          <Route path='/authentication' element={<Authentication/>}/>
          <Route path='/:markDownTitle/:id' element={<EditMarkdown/>} />
  </Route>
 
  </Routes>
      <ToastContainer />
 </>
  )
}

export default App

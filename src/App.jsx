import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import './App.css'
import Success from './pages/Success'
import Error from './pages/Error'
import { useSelector } from 'react-redux'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/success' element= {<ProtectedRoute element={<Success/>} />}/>
        <Route path='/*' element={<Error/>} />
      </Routes>
      </BrowserRouter>
  )
} 

export default App

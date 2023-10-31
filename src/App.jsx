import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import './App.css'
import Success from './pages/Success'
import Error from './pages/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/success' element= {<Success/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
      </BrowserRouter>
  )
} 

export default App

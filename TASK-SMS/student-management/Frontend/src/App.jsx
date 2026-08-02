// import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'
import EditStudent from './pages/EditStudent'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/add" element={<AddStudent/>}/>
        <Route path="/edit" element={<EditStudent/>}/>


    </Routes>
    </BrowserRouter>
  

    </>
  )
}

export default App

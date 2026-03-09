import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import { Route, Routes } from "react-router";
import Home from '../pages/Home'
import SiparisForm from '../pages/SiparisForm'
import SiparisOnay from '../pages/SiparisOnay'
import './App.css'

function App() {
  //const navigate = useNavigate()

  return (
    <>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/siparis" element={<SiparisForm />} />
  <Route path="/success" element={<SiparisOnay />} />
</Routes>
    </>
  )
}

export default App

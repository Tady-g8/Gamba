import { useState } from 'react'
import Header from './header.jsx'
import Login from './login.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Router>    
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

//money division number 3.9176470588235294
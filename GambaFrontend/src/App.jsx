import { useState } from 'react'
import Header from './header.jsx'
import Login from './login.jsx'
import Register from './register.jsx'
import IndexBody from './indexBody.jsx'
import Footer from './footer.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Router>    
        <Routes>
          <Route path="/" element={<IndexBody />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

//money division number 3.9176470588235294
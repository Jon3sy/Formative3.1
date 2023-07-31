import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

// page imports 
import Homepage from "./pages/Homepage"
import About from "./pages/About"

// component import 
import Header from "./components/Header"
import Footer from "./components/Footer"
import SingleArticle from "./components/SingleArticle"


function App() {
  return (
    <>
    <HashRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/article/" element={<SingleArticle/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
    </>
  )
}

export default App

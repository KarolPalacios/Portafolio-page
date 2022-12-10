import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Container from 'react-bootstrap/Container';
import Skills from './Components/Skills'
import ContactMe from './Components/ContactMe'


function App() {


  return (
    <div className="App" >
      <NavBar/>
      <Container className="my-5">
        <main className="main">
              <Home/>
              <Skills/>
              <Projects/>
        </main>
      </Container>
      <ContactMe/>
    </div>
  )
}

export default App

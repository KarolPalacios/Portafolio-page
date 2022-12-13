import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import ContactMe from './Components/ContactMe'
import { Container } from 'react-bootstrap';


function App() {


  return (
    <div className="App" >
      <Navbar/>
      <Container className="my-5">
        <main className="main">
          <Home />
          <Skills />
          <Projects />
        </main>
      </Container>
      <ContactMe />
    </div>
  )
}

export default App

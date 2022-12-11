import './App.css'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Container from 'react-bootstrap/Container';
import Skills from './Components/Skills'
import ContactMe from './Components/ContactMe'
import { Container, Nav, Navbar } from 'react-bootstrap';


function App() {


  return (
    <div className="App" >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#inicio">DN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#portafolio">Portafolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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

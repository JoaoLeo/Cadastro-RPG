import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const headerStyle = {
    backgroundColor: "#695757"
}
const Header = () => {
  return (
    <> 
    <Navbar style={headerStyle} className='mb-4' variant="secondary">
    <Container>
      <Navbar.Brand href="/"> Cadastro-RPG </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/classes">  Classes </Nav.Link>
      <Nav.Link href="/jogadores"> Jogadores</Nav.Link>
        <Nav.Link href="/personagens">  Personagens </Nav.Link>
        <Nav.Link href="/poderes">  Poderes </Nav.Link>
        <Nav.Link href="/pocoes">  Poções </Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  </>
  )

}

export default Header
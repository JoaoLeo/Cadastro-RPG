import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GiDiceTwentyFacesOne, GiConsoleController , GiCelebrationFire, GiMagicPotion } from 'react-icons/gi'
import { ImBooks } from 'react-icons/im'
import { FaHatWizard } from 'react-icons/fa'
import ModalContato from './ModalContato';
import Link from 'next/link';
const headerStyle = {
    backgroundColor: "#695757",
    fontSize: "25px"

}
const Header = () => {
  return (
    <> 
    <Navbar style={headerStyle} className='mb-4'>
    <Container>
      <Navbar.Brand style={headerStyle} as={Link} href="/"> <GiDiceTwentyFacesOne/> Cadastro-RPG </Navbar.Brand>   
      <Nav className="me-auto">
      <Nav.Link as={Link} href="/classes"> <ImBooks/>  Classes </Nav.Link>
      <Nav.Link as={Link} href="/jogadores"> <GiConsoleController/> Jogadores</Nav.Link>
        <Nav.Link as={Link} href="/personagens"> <FaHatWizard/>   Personagens </Nav.Link>
        <Nav.Link as={Link} href="/poderes"> <GiCelebrationFire/>  Poderes </Nav.Link>
        <Nav.Link as={Link} href="/pocoes"> <GiMagicPotion/>  Poções </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"> 
          <Navbar.Text> <ModalContato/> </Navbar.Text>
        </Navbar.Collapse>
      
    </Container>
  </Navbar>
  </>
  )

}

export default Header
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GiDiceTwentyFacesOne, GiConsoleController , GiCelebrationFire, GiMagicPotion } from 'react-icons/gi'
import { ImBooks } from 'react-icons/im'
import { FaHatWizard } from 'react-icons/fa'
const headerStyle = {
    backgroundColor: "#695757",
    fontSize: "25px"

}
const Header = () => {
  return (
    <> 
    <Navbar style={headerStyle} className='mb-4'>
    <Container>
      <Navbar.Brand style={headerStyle} href="/"> <GiDiceTwentyFacesOne/> Cadastro-RPG </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/classes"> <ImBooks/>  Classes </Nav.Link>
      <Nav.Link href="/jogadores"> <GiConsoleController/> Jogadores</Nav.Link>
        <Nav.Link href="/personagens"> <FaHatWizard/>   Personagens </Nav.Link>
        <Nav.Link href="/poderes"> <GiCelebrationFire/>  Poderes </Nav.Link>
        <Nav.Link href="/pocoes"> <GiMagicPotion/>  Poções </Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  </>
  )

}

export default Header
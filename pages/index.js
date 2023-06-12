import CardCadastros from '@/components/CardCadastros';
import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


export default function Home() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
      <Container>
        <h1> Cadastro RPG </h1>
        <Row className='mb-5'>
        <Col>
          <CardCadastros nome="Classes" 
          img='https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_576/MTc0MTYyMDc5NDY3NDQ4MTg4/class-balance-and-archetypes-in-rpgs.webp'
          desc= "Crie classes para seus personagens"
          link="/classes" />
        </Col>
     
        <Col>
        
        <CardCadastros nome="Jogadores" 
          img='https://i0.wp.com/nerdarchy.com/wp-content/uploads/2018/03/RPG-group-2.jpg?fit=7000%2C4200&ssl=1'
          desc= "Gerencie os usuários jogadores do site"
          link="/jogadores" />

        </Col>
        <Col>
          <CardCadastros nome="Personagens" 
          img='https://saladotesouro.files.wordpress.com/2017/01/b485d8f6692c4c78ba5d96bf5b943e1e.jpg'
          desc= "Crie e gerencie seus personagens"
          link="/personagens" />
        </Col>
        </Row>
        <Row className='mb-5 ms-2 justify-content-center'>

     
        <Col md={4}>
       
        <CardCadastros nome="Poderes" 
          img='https://3.bp.blogspot.com/-HXJ54Eo0wYg/Ve13SBLphMI/AAAAAAAABaM/vIOcm3vyvUI/s1600/archmage.jpg'
          desc= "Crie poderes para seus personagens"
          link="/poderes" />
          
        </Col>
        
        <Col md={4}>
          <CardCadastros nome="Poções" 
          img='https://pm1.aminoapps.com/6292/f9e1c4850ad2922725e4012c9c7a06b7d392b241_00.jpg'
          desc= "Crie e gerencie suas poções"
          link="/pocoes" />
        </Col>
        </Row>

      </Container>
    </>
  )
}

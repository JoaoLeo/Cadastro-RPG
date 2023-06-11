import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
      <Container>
        <h1> Cadastro RPG </h1>
      </Container>
    </>
  )
}

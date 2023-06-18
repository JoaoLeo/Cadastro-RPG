import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyle'
import styleCard from '@/styles/styleCard'
import styleForm from '@/styles/styleForm'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillGearFill, BsTrashFill } from 'react-icons/bs'
import { TbFeather, TbTrashFilled}  from 'react-icons/tb'

const index = () => {
  const [personagens, setpersonagens] = useState([])

    useEffect(()=>{
        setpersonagens(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('personagens')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('personagens', JSON.stringify(itens))
        setpersonagens(itens)
    }
    }
    return (
        <>
        <GlobalStyle/>
            <Header/>
            <Container> 
            <Link href="/personagens/form" className='mb-2'> 
            <Button style={styleForm.buttonPlus} className='mb-2' > 
            <AiOutlinePlus />
                Criar novo personagem
            </Button>
            </Link>

              {personagens.map((p,index) =>(
		           <Card style={styleCard}>     
                   <Card.Header as="h5">  {p.nome} </Card.Header>
                   <Card.Body>
                   <Card.Title> Jogador: {p.jogador}</Card.Title>
                   <Card.Title> Classe: {p.classe}</Card.Title>
                   <Card.Title> Raça: {p.raca} </Card.Title>
                   <Card.Title> Alinhamento Moral: {p.alinhamento} </Card.Title>
                   <Card.Title> Idade:  {p.idade} </Card.Title>
                   <Card.Title> Aparência Física:  {p.aparencia} </Card.Title>
                   <hr/>
                   <Card.Title> História: </Card.Title>
                   <Card.Text> <p size={25}> {p.historia} </p></Card.Text>
                   <Link href={'/personagens/' + index}>
                     <TbFeather size={25} className='text-light' /> 
                     </Link>
                     <TbTrashFilled size={25} onClick={() => excluir(index)} className="text-danger me-2"/> 
                     </Card.Body>
                    </Card> 		          
              ))}
            </Container>
        </>
    )
}

export default index
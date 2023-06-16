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
  const [jogadores, setjogadores] = useState([])

    useEffect(()=>{
        setjogadores(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('jogadores')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('jogadores', JSON.stringify(itens))
        setjogadores(itens)
    }
    }
    return (
        <>
        <GlobalStyle/>
            <Header/>
            <Container> 
            <Link href="/jogadores/form" className='mb-2'> 
            <Button style={styleForm.buttonPlus} className='mb-2' > 
            <AiOutlinePlus />
                Criar novo jogador
            </Button>
            </Link>

                {jogadores.map((j,index) =>(
		           <Card style={styleCard}>     
                   <Card.Header as="h5">  {j.nome} </Card.Header>
                   <Card.Body>
                   <Card.Title> Idade: {j.idade}</Card.Title>
                   <Card.Title> Email: {j.email} </Card.Title>
                   <Card.Title> CPF: {j.cpf} </Card.Title>
                   <Card.Title> Telefone:  {j.telefone} </Card.Title>
                   <Card.Title> Classe Favorita: {j.classFav}</Card.Title>
                   <Link href={'/jogadores/' + index}>
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
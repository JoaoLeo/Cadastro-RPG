import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyle'
import styleCard from '@/styles/styleCard'
import styleForm from '@/styles/styleForm'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillGearFill } from 'react-icons/bs'
import { TbFeather, TbTrashFilled } from 'react-icons/tb'

const index = () => {
  const [poderes, setpoderes] = useState([])

    useEffect(()=>{
        setpoderes(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('poderes')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('poderes', JSON.stringify(itens))
        setpoderes(itens)
    }
    }

  return (
    <> 
    <GlobalStyle/>
            <Header/>
            <Container> 
            <Link href="/poderes/form" className='mb-2'> 
            <Button style={styleForm.buttonPlus} className='mb-2' > 
            <AiOutlinePlus />
                Criar poder
            </Button>
            </Link>
                {poderes.map((p,index) =>(
		            <Card style={styleCard}>     
                    <Card.Header as="h5"> {p.descricao}</Card.Header>
                    <Card.Body>
                    <Card.Title> Elemento: {p.elemento} </Card.Title>
                    <Card.Title> Dano: {p.dano} </Card.Title>
                    <Link href={'/poderes/' + index}>
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
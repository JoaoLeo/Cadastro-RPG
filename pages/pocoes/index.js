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
  const [pocoes, setpocoes] = useState([])

    useEffect(()=>{
        setpocoes(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('pocoes')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('pocoes', JSON.stringify(itens))
        setpocoes(itens)
    }
    }
    return (
        <>
        <GlobalStyle/>
            <Header/>
            <Container> 
            <Link href="/pocoes/form" className='mb-2'> 
            <Button style={styleForm.buttonPlus} className='mb-2' > 
            <AiOutlinePlus />
                Criar poção
            </Button>
            </Link>

                {pocoes.map((p,index) =>(
                     <Card style={styleCard}>     
                     <Card.Header as="h5">   {p.tipo}</Card.Header>
                     <Card.Body>
                     <Card.Title> Quantidade: {p.qtd} </Card.Title>
                     <Card.Title> Perigo: {p.perigo} </Card.Title>
                     <Link href={'/pocoes/' + index}>
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
import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyle'
import styleForm from '@/styles/styleForm'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
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
            <Table variant="secondary" className='text-light'>
                <thead>
                    <tr>                   
                        <th> <BsFillGearFill/> </th>    
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Classe Favorita</th>
                    </tr>
                </thead>
                <tbody>
                {jogadores.map((j,index) =>(
		            <tr key={index}>
                        <td>
                        <Link href={'/jogadores/' + index}>
                            <TbFeather className='text-secondary' /> 
                        </Link>
                        <TbTrashFilled onClick={() => excluir(index)} className="text-danger me-2"/> 
                        </td>
                        <td>
                            {j.nome}
                        </td>
                        <td>
                            {j.idade}
                        </td>
                        <td>
                            {j.email}
                        </td> 
                        <td>
                            {j.cpf}
                        </td> 
                        <td>
                            {j.telefone}
                        </td> 
                        <td>
                            {j.classFav}
                        </td> 
                    </tr>
                ))}
                </tbody>
            </Table>
            </Container>
        </>

    )
}

export default index
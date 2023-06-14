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
  const [classes, setclasses] = useState([])

    useEffect(()=>{
        setclasses(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('classes')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('classes', JSON.stringify(itens))
        setclasses(itens)
    }
    }
    return (
        <>
        <GlobalStyle/>
            <Header/>
            <Container> 
            <Link href="/classes/form" className='mb-2'> 
            <Button style={styleForm.buttonPlus} className='mb-2' > 
            <AiOutlinePlus />
                Criar classe
            </Button>
            </Link>
            <Table variant="secondary" className='text-light'>
                <thead>
                    <tr>                   
                        <th> <BsFillGearFill/> </th>    
                        <th>Nome</th>
                        <th>Poder Principal</th>
                        <th>Tipo de combate</th>
                        
                    </tr>
                </thead>
                <tbody>
                {classes.map((p,index) =>(
		            <tr key={index}>
                        <td>
                        <Link href={'/classes/' + index}>
                            <TbFeather className='text-secondary' /> 
                        </Link>
                        <TbTrashFilled onClick={() => excluir(index)} className="text-danger me-2"/> 
                        </td>
                        <td>
                            {p.nome}
                        </td>
                        <td>
                            {p.poder}
                        </td>
                        <td>
                            {p.combate}
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
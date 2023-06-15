import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyle'
import styleForm from '@/styles/styleForm'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
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
            <Table variant="secondary" className='text-light'>
                <thead>
                    <tr>                   
                        <th> <BsFillGearFill/> </th>    
                        <th>Descrição</th>
                        <th>Elemento</th>
                        <th>Dano</th>
                        
                    </tr>
                </thead>
                <tbody>
                {poderes.map((p,index) =>(
		            <tr key={index}>
                        <td>
                        <Link href={'/poderes/' + index}>
                            <TbFeather className='text-secondary' /> 
                        </Link>
                        <TbTrashFilled onClick={() => excluir(index)} className="text-danger me-2"/> 
                        </td>
                        <td>
                            {p.descricao}
                        </td>
                        <td>
                            {p.elemento}
                        </td>
                        <td>
                            {p.dano}
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
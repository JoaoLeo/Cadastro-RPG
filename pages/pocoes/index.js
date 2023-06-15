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
            <Table variant="secondary" className='text-light'>
                <thead>
                    <tr>                   
                        <th> <BsFillGearFill/> </th>    
                        <th>Tipo</th>
                        <th>Quantidade</th>
                        <th>Perigo</th>
                    </tr>
                </thead>
                <tbody>
                {pocoes.map((p,index) =>(
		            <tr key={index}>
                        <td>
                        <Link href={'/pocoes/' + index}>
                            <TbFeather className='text-secondary' /> 
                        </Link>
                        <TbTrashFilled onClick={() => excluir(index)} className="text-danger me-2"/> 
                        </td>
                        <td>
                            {p.tipo}
                        </td>
                        <td>
                            {p.qtd}
                        </td>
                        <td>
                            {p.perigo}
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
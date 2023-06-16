import Header from '@/components/Header'
import GlobalStyle from '@/styles/globalStyle'
import styleForm from '@/styles/styleForm'
import geralValidator from '@/validators/geralValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiFilePaperFill } from 'react-icons/ri'
import { TbArrowLeftTail } from 'react-icons/tb'

const formClasses = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState : { errors }, setValue } = useForm();
  const [poderes, setPoderes] = useState([])

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('poderes')) || [] ; 
    setPoderes(data); 
  }, []);

  function salvar(dados) {
    console.log(dados);
    const classes = JSON.parse(window.localStorage.getItem('classes')) || []
    classes.unshift(dados)
    window.localStorage.setItem('classes', JSON.stringify(classes))
    push("/classes")
  }
  function handleChange(event){
    setValue(event.target.name, (mask(event.target.value, event.target.getAttribute("mask"))))
  }
  return (
    <> 
    <GlobalStyle/>
    <Header/>
    <Container>
    <div style={styleForm}>  
    <Form>
        <Form.Group className="py-2 px-3" controlId="nome">
          <Form.Label>Nome da Classe</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', geralValidator.notNull)}/>
          { errors.nome && <p className='mt-1 text-light'> {errors.nome.message} </p> } 
        </Form.Group>

       
        <Form.Group className="py-2 px-3" controlId="poder">
          <Form.Label> Poder Principal </Form.Label>
          <Form.Select isInvalid={errors.poder} {...register('poder',geralValidator.notNull)}>
          { errors.poder && <p className='mt-1 text-light'> {errors.poder.message} </p> } 
          <option value=""> Selecione um poder </option>
                  {poderes.map((o,i) => (
                  <option key={i} value={o.descricao}> {o.descricao} </option>         
          ))}
          
          </Form.Select>
          <Link href="/poderes/form" className='mb-2' > 
          <Button type="button" style={styleForm.buttonPlus}  className='mt-2'> 
            <AiOutlinePlus/>
                Criar poder
            </Button> 
            </Link>
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="combate">
          <Form.Label> Tipo de combate </Form.Label>
          <Form.Select isInvalid={errors.combate} {...register('combate', geralValidator.notNull)}>
          { errors.combate && <p className='mt-1 text-light'> {errors.combate.message} </p> }
          <option value=""> Selecione o tipo de combate </option>
                <option key={"fisico"} value={"Físico"}> Físico </option>
                <option key={"magico"} value={"Mágico"}> Mágico </option>
                <option key={"furtivo"} value={"Furtivo"}> Furtivo </option>
          </Form.Select>
        </Form.Group>
    
        <div className='text-center me-2 py-3'>
        <Button style={styleForm.buttonSave}type="button" className='me-2' onClick={handleSubmit(salvar)}>
          <RiFilePaperFill/>
          Salvar
        </Button>
        <Link href={'/classes'}>
        <Button type="button" style={styleForm.buttonBack}>
          <TbArrowLeftTail/> 
          Voltar
        </Button>
        </Link>
        </div>
      </Form>
      </div>
       </Container>
    </>
  )
}

export default formClasses
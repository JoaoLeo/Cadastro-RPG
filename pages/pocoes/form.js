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

const formPocoes = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState : { errors }, setValue } = useForm();

  function salvar(dados) {
    const pocoes = JSON.parse(window.localStorage.getItem('pocoes')) || []
    pocoes.unshift(dados)
    window.localStorage.setItem('pocoes', JSON.stringify(pocoes))
    push("/pocoes")
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
        <Form.Group className="py-2 px-3" controlId="tipo">
          <Form.Label> Escolha o tipo da poção </Form.Label>
          <Form.Select {...register('tipo', geralValidator.notNull)}>
          <option value=""> Selecione o tipo da poção </option>
          <option key={1} value={"Envenenamento"}> Envenenamento </option>   
          <option key={2} value={"Paralizante"}> Paralizante </option>     
          <option key={3} value={"Sonífera"}> Sonífera </option>           
          </Form.Select>
        </Form.Group>
      
        <Form.Group className="py-2 px-3" controlId="qtd">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control type="number" 
          placeholder="Digite a quantidade de poções que deseja " 
          {...register('qtd', geralValidator.qtd)} 
          isInvalid={errors.qtd}/>
           { errors.qtd && <p className='mt-1 text-light'> {errors.qtd.message} </p> }
        </Form.Group>
        
        <Form.Group className="py-2 px-3" controlId="perigo">
          <Form.Label> Nível de perigo</Form.Label>
          <Form.Select {...register('perigo', geralValidator.notNull)}>
          <option value=""> Selecione o nível de perigo da poção</option>
                <option key={"inofensivo"} value={"Inofensivo"}> Inofensivo </option>
                <option key={"mediano"} value={"Mediano"}> Mediano </option>
                <option key={"mortal"} value={"Mortal"}> Mortal </option>
          </Form.Select>
        </Form.Group>      

        <div className='text-center me-2 py-3'>
        <Button style={styleForm.buttonSave}type="button" className='me-2' onClick={handleSubmit(salvar)}>
          <RiFilePaperFill/>
          Salvar
        </Button>
        <Link href={'/pocoes'}>
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

export default formPocoes
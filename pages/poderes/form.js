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

const formPoderes = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState : { errors }, setValue } = useForm();
  const [poderes, setPoderes] = useState([])
  const [valorDano, setValorDano] = useState(50)

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('poderes')) || [] ; 
    setPoderes(data); 
  }, []);

  const handleRangeChange = (event) => { setValorDano(event.target.value); };

  function salvar(dados) {
    const poderes = JSON.parse(window.localStorage.getItem('poderes')) || []
    poderes.unshift(dados)
    window.localStorage.setItem('poderes', JSON.stringify(poderes))
    push("/poderes")
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
        <Form.Group className="py-2 px-3" controlId="descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o a descrição do poder" {...register('descricao', geralValidator.notNull)}/>
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>
       
        <Form.Group className="py-2 px-3" controlId="elemento">
          <Form.Label> Elemento </Form.Label>
          <Form.Select {...register('elemento', geralValidator.notNull)}>
          <option value=""> Selecione o elemento que irá compor o poder </option>
                <option key={"fogo"} value={"Fogo"}> Fogo </option>
                <option key={"agua"} value={"Água"}> Água </option>
                <option key={"raio"} value={"Raio"}> Raio </option>
                <option key={"laminas"} value={"Lâminas"}> Lâminas </option>
                <option key={"veneno"} value={"Veneno"}> Veneno </option>
          </Form.Select>
          </Form.Group>

        <Form.Group className="py-2 px-3" controlId="dano">
          <Form.Label> Nível de dano: </Form.Label>
          <Form.Text style={{color: '#8B0000', fontSize:'22px', fontWeight: 'bolder'}}> {valorDano} </Form.Text>
          <Form.Range {...register('dano')}
          value={valorDano}
          onChange={handleRangeChange}
          min={0}
          max={100}
          variant="danger"
          >
          </Form.Range>          
        </Form.Group>

        <div className='text-center me-2 py-3'>
        <Button style={styleForm.buttonSave}type="button" className='me-2' onClick={handleSubmit(salvar)}>
          <RiFilePaperFill/>
          Salvar
        </Button>
        <Link href={'/poderes'}>
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

export default formPoderes
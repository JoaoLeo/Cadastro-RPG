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
import { mask } from 'remask'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, formState : { errors }, setValue } = useForm();
  const [classes, setClasses] = useState([])
  const [jogadores, setJogadores] = useState([])

  useEffect(() => {
    const classes = JSON.parse(window.localStorage.getItem('classes')) || [] ; 
    const jogadores = JSON.parse(window.localStorage.getItem('jogadores')) || [] ; 
    setClasses(classes);
    setJogadores(jogadores);

    if(query.id) { 
      const personagens = JSON.parse(window.localStorage.getItem('personagens'))
      const personagem = personagens[query.id]
      for(let campo in personagem) { 
        setValue(campo, personagem[campo]) 
      }
  }
  }, [query.id]);

  function salvar(dados) {
    console.log(dados);
    const personagens = JSON.parse(window.localStorage.getItem('personagens')) || []
    personagens.splice(query.id, 1, dados)
    window.localStorage.setItem('personagens', JSON.stringify(personagens))
    push("/personagens")
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
    <Form.Group className="py-2 px-3" controlId="jogador">
          <Form.Label> Jogador </Form.Label>
          <Form.Select {...register('jogador', geralValidator.notNull)}>
          <option value=""> Selecione quem vai jogar com esse personagm </option>
                  {jogadores.map((j,i) => (
                  <option key={i} value={j.nome}> {j.nome} </option>               
          ))}      
          </Form.Select>
        </Form.Group>

    <Form.Group className="py-2 px-3" controlId="classFav">
          <Form.Label> Classe do personagem </Form.Label>
          <Form.Select {...register('classe')}>
          <option value=""> Selecione a classe </option>
                  {classes.map((c,i) => (
                  <option key={i} value={c.nome}> {c.nome} </option>               
          ))}      
          </Form.Select>
        </Form.Group>
    
        <Form.Group className="py-2 px-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome do personagem" {...register('nome', geralValidator.notNull)}/>
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="classFav">
          <Form.Label> Raça do personagem </Form.Label>
          <Form.Select {...register('raca', geralValidator.notNull)}>
          <option value=""> Selecione a raça do personagem </option>
                <option key={1} value={"Humano"}> Humano </option>     
                <option key={2} value={"Elfo"}>  Elfo </option>   
                <option key={3} value={"Draconato"}> Draconato </option>   
                <option key={4} value={"Goblin"}> Goblin </option>   
                <option key={5} value={"Halfling"}> Halfling </option>   
                <option key={6} value={"Tiefling"}> Tiefling </option>                 
          </Form.Select>
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="classFav">
          <Form.Label> Alinhamento Moral </Form.Label>
          <Form.Select {...register('alinhamento', geralValidator.notNull)}>
          <option value=""> Selecione  alinhamento do seu personagem </option>
                <option key={1} value={"Leal e Bom"}> Leal e Bom </option>     
                <option key={2} value={"Neutro e Bom"}>  Neutro e Bom </option>   
                <option key={3} value={"Caótico e Bom"}> Caótico e Bom </option>   
                <option key={4} value={"Leal e Neutro"}> Leal e Neutro </option>   
                <option key={5} value={"Neutro"}> Neutro </option>   
                <option key={6} value={"Caótico e Neutro"}> Tiefling </option>       
                <option key={7} value={"Leal e Mau"}> Leal e Mau </option>             
                <option key={8} value={"Neutro e Mau"}> Neutro e Mau </option>   
                <option key={9} value={"Caótico e Mau"}> Caótico e Mau </option>   
          </Form.Select>
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="nome">
          <Form.Label>Idade</Form.Label>
          <Form.Control type="number"
           max={3000}
           min={0}
           placeholder="Digite sua idade" {...register('idade', geralValidator.notNull)}/>
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="aparencia">
          <Form.Label>Aparência Física</Form.Label>
          <Form.Control type="text" placeholder="Descreva a aparência do seu personagem "  {...register('aparencia', geralValidator.notNull)}/>
        </Form.Group>

        <Form.Group className="py-2 px-3" controlId="historia">
          <Form.Label>História</Form.Label>
          <Form.Control 
          as="textarea"
          type="text" 
          placeholder="Conte um pouco da história do seu personagem " 
          {...register('historia', geralValidator.nome)}/>
        </Form.Group>

        <div className='text-center me-2 py-3'>
        <Button style={styleForm.buttonSave}type="button" className='me-2' onClick={handleSubmit(salvar)}>
          <RiFilePaperFill/>
          Salvar
        </Button>
        <Link href={'/personagens'}>
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

export default id
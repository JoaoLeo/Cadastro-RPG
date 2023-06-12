import Link from 'next/link'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardCadastros = ({nome,img ,desc, link}) => {
  return (
    
    <Card style={{backgroundColor:'#ebe4e4' ,width: 'auto', textDecoration: 'none' }}>
      <Card.Img src={img} height="250px" width="220px" />
      <Card.Body>
        <Card.Title> <h3> {nome} </h3> </Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Link href={link} className='me-2'> 
        <Button variant="secondary"> Ver {nome} </Button>
        </Link>
        <Link href={`${link}/form`}> 
        <Button variant="secondary"> Criar </Button>
        </Link>
      </Card.Body>
    </Card>
    
  )
}

export default CardCadastros;
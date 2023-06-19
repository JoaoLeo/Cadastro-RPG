import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IoMdContact } from 'react-icons/io';


const ModalContato = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [contatos, setContatos] = useState({
    github: "",
  })
  return (
    <>
      <div>
        <span onClick={() => {
          contatos.github = <a href="https://github.com/JoaoLeo" target="_blank"> JoaoLeo </a>
          setContatos(contatos)
          handleShow()
        }}>
          <Button style={{backgroundColor: "#708090", color:"black"}}> <IoMdContact/> Dev: João Leonardo</Button>
        </span>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Contatos
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5> Github: {contatos.github} </h5>
            <p>Projeto final da matéria de construção de frontend que consiste em cruds no localstorage de registros baseados em jogos de RPG como: Classe, Jogador, Personagem, Poderes e Poções.</p>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default ModalContato;
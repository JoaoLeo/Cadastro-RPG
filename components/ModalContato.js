import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IoMdContact } from 'react-icons/io';


const ModalContato = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [contatos, setContatos] = useState({
    github: "",
    email: "",
    telefone: ""
  })
  return (
    <>
      <div>
        <span onClick={() => {
          contatos.github = <a href="https://github.com/JoaoLeo" target="_blank"> JoaoLeo </a>
          contatos.email = "joaoleonardo9921@gmail.com"
          contatos.telefone = "(61)99889178"
          setContatos(contatos)
          handleShow()
        }}>
          <Button bg="light" variant="secondary"> <IoMdContact/> Dev: João Leonardo</Button>
        </span>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Contatos
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5> Github: {contatos.github} </h5>
            <h5> Email: {contatos.email} </h5>
            <h5> Telefone: {contatos.telefone} </h5>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default ModalContato;
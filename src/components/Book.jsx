import React, { useState } from "react";
import { Modal, ModalHeader } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../styles/Book.css'

const Book = () => {
  const [modal, setmodal] = useState(false);
  return (
    <>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          PopUp{" "}
          <h1 style={{ backgroundColor: "black", color: "white" }}>bbdsbvcy</h1>
        </ModalHeader>
      </Modal>
      <button
        className="btn mt-3"
        style={{ backgroundColor: "black", color: "white" }}
        onClick={() => setmodal(true)}
      >
        Book Tickets
      </button>
    </>
  );
};

export default Book;

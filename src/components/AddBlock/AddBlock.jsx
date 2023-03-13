import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddBlock = () => {
  return (
    <div style={{ marginTop: "8%" }}>
      <h2 className="d-flex justify-content-center">Add Picture</h2>
      <div
        className="modal show"
        style={{
          display: "block",
          position: "initial",
          width: "50%",
          margin: "auto",
        }}
      >
        <Modal.Body>
          <Form.Control
            placeholder="image"
            className="mt-5"
            type="text"
          ></Form.Control>
          <Form.Control
            placeholder="Name"
            className="mt-5"
            type="text"
          ></Form.Control>
          <Form.Control
            placeholder="Price"
            className="mt-5"
            type="text"
          ></Form.Control>
          <Form.Control
            placeholder="Status"
            className="mt-5"
            type="text"
          ></Form.Control>
          <Form.Control
            placeholder="Country"
            className="mt-5"
            type="text"
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer style={{ margin: "auto" }}>
          <Button variant="primary">Add Picture </Button>
        </Modal.Footer>
      </div>
    </div>
  );
};

export default AddBlock;

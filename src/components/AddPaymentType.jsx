import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddPaymentType({ show, addPay }) {
  const [payment, setPayment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addPay.push(payment);
    show()
  }

  return (
    <>
      <Modal show={show} onHide={() => show()}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Payment Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                value={payment}
                onChange={({ target }) => setPayment(target.value)}
                type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => show()}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPaymentType

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddCategory({ show, addCat }) {
  const [category, setCategory] = useState('');
  // const createCategoryType = () => axios.post('/categories', { category })
  const handleSubmit = (event) => {
    event.preventDefault();
    addCat.push(category);
    // chamar a createCategoryType()
    show();
  }

  return (
    <>
      <Modal show={show} onHide={() => show()}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tap here to add new category</Form.Label>
              <Form.Control
                value={category}
                onChange={({ target }) => setCategory(target.value)}
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

export default AddCategory

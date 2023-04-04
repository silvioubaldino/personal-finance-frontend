import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';
import AddCategory from './AddCategory';
import AddPaymentType from './AddPaymentType';

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [nome, setNome] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [checkedPay, setCheckedPay] = useState(false);
  const [checkedFrequently, setCheckedFrequently] = useState(false);
  const [categories, setCat] = useState(['Alimentação', 'Casa', 'Transporte', 'Lazer']);
  const [payments, setPay] = useState(['Crédito', 'Débito', 'Pix', 'Dinheiro']);
  const [showP, setShowP] = useState(false);
  const [showC, setShowC] = useState(false);


  const handleFields = (event) => {
    const valor = event.target.value;
    setNome(valor);

    if (valor.length > 3) {
      setIsValid(true);
      setIsInvalid(false);
    } else {
      setIsValid(false);
      setIsInvalid(true);
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className='m-30'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* Input da descrição */}
          <Form.Group as={Col} md="9" controlId="validationCustom01">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Leave a Description"
              value={nome}
              onChange={handleFields}
              isValid={isValid}
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* Input do valor */}
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Value</Form.Label>
            <Form.Control
              required
              type="number"
              step="0.01"
              placeholder="Tap the Value"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          {/* Input data de Vencimento */}
          <Form.Group as={Col} md="7" controlId="validationCustom03">
            <Form.Label>Maturity</Form.Label>
            <Form.Control type="date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid date.
            </Form.Control.Feedback>
          </Form.Group>
          {/* Input se já foi Pago ou não */}
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>Paid?</Form.Label>
            <ToggleButton
              style={{ width: '50px', marginLeft: '10px', marginTop: '10px' }}
              className="mb-2"
              id="toggle-check-pay"
              type="checkbox"
              variant="outline-primary"
              checked={checkedPay}
              value="1"
              onChange={(e) => setCheckedPay(e.currentTarget.checked)}
            >
              {checkedPay ? 'Yes' : 'No'}
            </ToggleButton>
          </Form.Group>
          {/* Input se é Recorrente ou não */}
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Frequently?</Form.Label>
            <ToggleButton
              style={{ width: '50px', marginLeft: '10px' }}
              className="mb-2"
              id="toggle-check-frequently"
              type="checkbox"
              variant="outline-primary"
              checked={checkedFrequently}
              value="2"
              onChange={(e) => setCheckedFrequently(e.currentTarget.checked)}
            >
              {checkedFrequently ? 'Yes' : 'No'}
            </ToggleButton>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          {/* Select da Categoria */}
          <Col xs={8}>
            <Form.Select aria-label="Default select example" className='mb-2' required>
              <option>Select a Category</option>
              {categories.map((cat, i) => (
                <option value={cat} key={i}>{cat}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            {showC && <AddCategory show={() => setShowC(!showC)} addCat={categories} />}
            <Button className='mb-1' onClick={() => setShowC(!showC)}>Add Category</Button>
          </Col>
        </Row>
        <Row className='mb-3'>
          {/* Select do tipo de pagamento */}
          <Col xs={8}>
            <Form.Select aria-label="Default select examples" className='mb-2' required>
              <option>Select Payment Type</option>
              {payments.map((pay, i) => (
                <option value={pay} key={i + 1}>{pay}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            {showP && <AddPaymentType show={() => setShowP(!showP)} addPay={payments} />}
            <Button className='mb-1' onClick={() => setShowP(!showP)}>Add Payment</Button>
          </Col>
        </Row>
        <Button type="submit">Submit Entry</Button>
      </Form>
    </Container>
  );
}

export default FormExample;

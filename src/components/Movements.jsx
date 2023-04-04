import React from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const totals = [{ tipo: 'mercado', total: 40.00 }, { tipo: 'cafeteria', total: 12.02 }, { tipo: 'barbearia', total: 35.00 }]


function Movements() {
  const handlePayment = (value) => {
    console.log(value);
  }

  return (
    <Container style={{ marginTop: '30px', marginLeft: '0px' }}>
      <Accordion>
        {totals.map((e, i) => (
          <Container key={i} className='d-flex flex-row mb-3'>
            <Accordion.Item eventKey={`${i}`}>
              <Accordion.Header>{e.tipo}</Accordion.Header>
              <Accordion.Body>
                DETALHES DA MOVIMENTAÇÃO 1
                <p>{`Total: R$ ${e.total}`}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Button onClick={() => handlePayment(e.total)}>Pagar</Button>
          </Container>
        ))}
      </Accordion>
    </Container>
  );
}

export default Movements

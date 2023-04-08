import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

// const totals = [{ tipo: 'mercado', total: 40.00 }, { tipo: 'cafeteria', total: 12.02 }, { tipo: 'barbearia', total: 35.00 }]


function Movements() {
  const [movements, setMovements] = useState([])

  const getMovements = async () => {
    const response = await axios.get('http://localhost:8080/transactions/');
    setMovements(response.data)
  }

  const handlePayment = (value) => {
    console.log(value);
  }

  useEffect(() => {
    getMovements();
  })
  return (
    <Container style={{ marginTop: '30px', marginLeft: '0px' }}>
      <Accordion>
        {movements?.map((e, i) => (
          <Container key={i} className='d-flex flex-row mb-3'>
            <Accordion.Item eventKey={`${i}`} style={{ width: '400px' }}>
              <Accordion.Header>{e.description}</Accordion.Header>
              <Accordion.Body>
                DETALHES DA MOVIMENTAÇÃO
                <p>{`Total: R$ ${e.amount}`}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Button
              style={{ backgroundColor: '#E00047', border: 'none' }}
              onClick={() => handlePayment(e.amount)}
            >
              Pagar
            </Button>
          </Container>
        ))}
      </Accordion>
    </Container>
  );
}

export default Movements

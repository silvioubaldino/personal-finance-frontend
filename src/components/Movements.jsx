import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { getTransactionsByPeriod } from '../handlers/transaction';
import TableTransactions from './TableTransactions';


const mockFrom = "2021-04-01"
const mockTo = "2023-12-28"

function Movements() {
  const [movements, setMovements] = useState([])

  const getMovements = async () => {
    const transaction = await getTransactionsByPeriod(mockFrom, mockTo);
    setMovements(transaction)
  }

  const handlePayment = (value) => {
    console.log(value);
  }

  useEffect(() => {
    getMovements();
  }, [])

  return (
    <Container style={{ marginTop: '30px', marginLeft: '0px' }}>
      <Accordion>
        {movements?.map((e, i) => (
          <Container key={i} className='d-flex flex-row mb-3'>
            <Accordion.Item eventKey={`${i}`} style={{ width: '100%' }}>
              <Accordion.Header>
                <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', 'flexDirection': 'column', justifyContent: 'center' }}>
                    <h4>{e.estimate.description}</h4>
                    <legend style={{ fontSize: '14px' }}>
                      {(e?.estimate.date).split('T')[0]}
                    </legend>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                    <p>{`Estimated: R$ ${e.consolidation.estimated}`}</p>
                    <p>{`Realized: R$ ${e.consolidation.realized}`}</p>
                    <p>{`Remaining: R$ ${e.consolidation.remaining}`}</p>
                  </div>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                DETALHES DA MOVIMENTAÇÃO
                <TableTransactions items={e.done_list} />
              </Accordion.Body>
            </Accordion.Item>
            <Button
              style={{ backgroundColor: '#E00047', border: 'none' }}
              onClick={() => handlePayment(e.estimate.amount)}
              disabled={!e.consolidation.remaining > 0}
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

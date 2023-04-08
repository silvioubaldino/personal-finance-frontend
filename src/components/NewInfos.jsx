import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import FormExample from './Form';

function NewInfos() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        style={{
          'marginTop': '20px',
          marginLeft: '30px',
          background: '#E00047',
          border: 'solid 2px #FF0A58',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
        variant="primary"
        onClick={() => setShow(true)}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        New Entries
      </Button>

      <Offcanvas
        style={{ 'width': '600px', background: '#ff709d' }}
        show={show} onHide={() => setShow(false)}
        data-bs-scroll="true" data-bs-backdrop="false"
        tabIndex="-1" id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasScrollingLabel">Ok, let's make a New Entry!!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormExample />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NewInfos
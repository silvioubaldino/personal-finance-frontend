import '../style/components/movement.css'

const Movements = (props) => {
  return (
    <div className='row-wrapper'>
      <div className='container-describe'>
        <p>
          {props.describeType}
        </p>
        <h5>
          {props.describeTitle}
        </h5>
        <h5>
          {`R$${props.describePrice}`}
        </h5>
        <h5>
          {props.describeDate}
        </h5>
      </div>
      <div>
        <p className='movement-item-right-title'>{props.typeBill}</p>
        <div className='movement-item-right'>
          <div>
            <p>{props.payed !== null ? 'Pago' : ''}</p>
            {props.payed !== null ? `R$${props.payed}` : ''}
          </div>
          <div>
            <p>{props.payed !== null ? 'Estimado' : ''}</p>
            {props.estimated}
          </div>
          <div>
            <p>{props.payed !== null ? 'Restante' : ''}</p>
            {props.rest}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movements;
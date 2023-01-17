import '../style/components/movement.css'
import { movements } from '../mocks/movementData.mock';

const Movements = () => {
  return (
    <div className='container-movements'>
      <h1>Movimentações</h1>
      {movements.map((e, i) => (
        <div className='container-movement-item' key={i}>
          <div className='container-describe'>
            <p>
              {e.describe.type}
            </p>
            <h5>
              {e.describe.title}
            </h5>
            <h5>
              {`R$${e.describe.price}`}
            </h5>
            <h5>
              {e.describe.date}
            </h5>
          </div>
          <div>
            <p className='movement-item-right-title'>{e.typeBill}</p>
            <div className='movement-item-right'>
              <div>
                <p>{e.payed !== null ? 'Pago' : ''}</p>
                {e.payed !== null ? `R$${e.payed}` : ''}
              </div>
              <div>
                <p>{e.payed !== null ? 'Estimado' : ''}</p>
                {e.estimated}
              </div>
              <div>
                <p>{e.payed !== null ? 'Restante' : ''}</p>
                {e.rest}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movements;
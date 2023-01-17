import {reports} from '../mocks/report.mock';

import "../style/components/resumedReport.css"

const ResumedReport = () => {
  return (
    <div className="container-report">
      <div>
        <h5 id=''>Gastos</h5>
        {`R$ ${reports.gastos}`}
      </div>
      <div>
        <h5>Rendas</h5>
        {`R$ ${reports.rendas}`}</div>
      <div>
        <h5>Resultado</h5>
        {`R$ ${reports.resultado}`}
      </div>
      <div>
        <h5>Falta Pagar</h5>
        {`R$ ${reports.faltaPagar}`}
      </div>
    </div>
  );
};

export default ResumedReport;
import { Accordion, AccordionSummary, AccordionDetails, Typography, styled } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Movements from "./ResumedMovements";

import { movements } from '../mocks/movementData.mock';
import '../style/components/movement.css'
import TableMovementDetails from "./TableMovementDetails";

const CustomizedAccordion = styled(Accordion)`
  background: rgba(137, 230, 234, 1);
  border: 2px solid black;
  border-radius: 7px;
`;

const AccordionBuild = () => {
  return(
    <div className="container-accordion">
      <h1>Movimentações</h1>
      <div className='container-movements'>
        {movements?.map((e, i) => (
          <CustomizedAccordion >
            <AccordionSummary
              key={i}
              id='painel1'
              aria-controls='painel1-conteudo'
              expandIcon={<ExpandMore/>}
            >
              <Typography>
                <Movements
                  describeType={e.describe.type}
                  describeTitle={e.describe.title}
                  describePrice={e.describe.price}
                  describeDate={e.describe.date}
                  typeBill={e.typeBill}
                  estimated={e.estimated}
                  payed={e.payed}
                  rest={e.rest}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table className='details-header'>
                  <tr className='deitals-collum'>
                    <th>Categoria</th>
                    <th>Descrição</th>
                    <th>Forma de Pagamento</th>
                    <th>Data</th>
                    <th>Valor</th>
                  </tr>
                </table>
              </Typography>
              { e.details.map((f, index) => (
                <Typography key={index}>
                  <TableMovementDetails detail={f} />
                </Typography>
              ))}
            </AccordionDetails>
          </CustomizedAccordion>
        ))}
      </div>
    </div>
  );
}

export default AccordionBuild;
import { Accordion, AccordionSummary, AccordionDetails, Typography, styled } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Movements from "./ResumedMovements";

import '../style/components/movement.css'
import TableMovementDetails from "./TableMovementDetails";

const CustomizedAccordion = styled(Accordion)`
  background: rgba(137, 230, 234, 1);
  border: 2px solid black;
  border-radius: 7px;
`;

const AccordionBuild = ({movements}) => {

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
                  describeType={e.parent_transaction.categories.description}
                  describeTitle={e.parent_transaction.description}
                  describePrice={e.parent_transaction.amount}
                  describeDate={e.parent_transaction.date_update}
                  typeBill={e.parent_transaction.description}
                  estimated={e.consolidation.estimated}
                  payed={e.consolidation.realized}
                  rest={e.consolidation.remaining}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <TableMovementDetails detail={e} />
              </Typography>
            </AccordionDetails>
          </CustomizedAccordion>
        ))}
      </div>
    </div>
  );
}

export default AccordionBuild;
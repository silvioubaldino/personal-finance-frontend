import '../style/components/movement.css'

const TableMovementDetails = ({detail}) => {
  return(
    <table>
      <tr>
        <th>Categoria</th>
        <th>Descrição</th>
        <th>Forma de Pagamento</th>
        <th>Data</th>
        <th>Valor</th>
      </tr>
      { detail.transaction_list.length > 0 ? detail.transaction_list.map((f, index) => (
      <tr key={index}>
        <td>{f.categories.description}</td>
        <td>{f.description}</td>
        <td>{f.type_payments.description}</td>
        <td>{f.date_update.slice(0, 10)}</td>
        <td>{f.amount}</td>
      </tr>
    )) : <TableMovementDetailsFail /> }
    </table>
  )
}

const TableMovementDetailsFail = () => {
  return(
    <tr>
      <td>nada informado</td>
      <td>nada informado</td>
      <td>nada informado</td>
      <td>nada informado</td>
      <td>nada informado</td>
    </tr>
  )
}

export default TableMovementDetails;

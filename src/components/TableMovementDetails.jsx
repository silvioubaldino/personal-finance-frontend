const TableMovementDetails = (props) => {
  return(
    <table>
      <tr>
        <th>Categoria</th>
        <th>Descrição</th>
        <th>Forma de Pagamento</th>
        <th>Data</th>
        <th>Valor</th>
      </tr>
      <tr>
        <td>{props.category}</td>
        <td>{props.description}</td>
        <td>Vale Alimentação</td>
        <td>{props.date}</td>
        <td>{props.payed}</td>
      </tr>
    </table>
  )
}

export default TableMovementDetails;

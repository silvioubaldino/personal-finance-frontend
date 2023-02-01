import '../style/components/movement.css'

const TableMovementDetails = ({detail}) => {
  return(
    <table className='details-header'>
      <tr className='deitals-collum'>
        <td>{detail.category}</td>
        <td>{detail.description}</td>
        <td>{detail.typeOfBill}</td>
        <td>{detail.date}</td>
        <td>{detail.value}</td>
      </tr>
    </table>
  )
}

export default TableMovementDetails;

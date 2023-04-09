import React from 'react';
import Table from 'react-bootstrap/Table';

function TableTransactions({ items }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Categoria</th>
          <th>Descrição</th>
          <th>Pagamento</th>
          <th>Carteira</th>
          <th>Data</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.categories.description}</td>
            <td>{item.description}</td>
            <td>{item.type_payments.description}</td>
            <td>{item.wallets.description}</td>
            <td>{(item?.date).split('T')[0]}</td>
            <td>R$ {item.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableTransactions
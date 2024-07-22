import React, { useState, useEffect } from 'react';
import { getTransactions } from '../app/belvoService';
import { Transaction } from '../app/types';

interface TransactionsTableProps {
  linkId: string;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ linkId }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions(linkId);
      setTransactions(data);
    };

    fetchTransactions();
  }, [linkId]);

  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;

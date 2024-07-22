import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getTransactions } from '../app/belvoService';
import { Transaction } from '../app/types';

interface TransactionsChartsProps {
  linkId: string;
}

const TransactionsCharts: React.FC<TransactionsChartsProps> = ({ linkId }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions(linkId);
      setTransactions(data);
      setFilteredTransactions(data);
    };

    fetchTransactions();
  }, [linkId]);

  const filterTransactions = (startDate: string, endDate: string) => {
    const filtered = transactions.filter(transaction => {
      const date = new Date(transaction.date);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    setFilteredTransactions(filtered);
  };

  const chartOptions = {
    chart: {
      type: 'scatter'
    },
    title: {
      text: 'Transactions Scatter Plot'
    },
    xAxis: {
      title: {
        text: 'Date'
      },
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Amount'
      }
    },
    series: [{
      name: 'Transactions',
      data: filteredTransactions.map(transaction => ({
        x: new Date(transaction.date).getTime(),
        y: transaction.amount,
        marker: {
          radius: Math.abs(transaction.amount) / 10
        }
      }))
    }]
  };

  return (
    <div>
      <h2>Transactions Charts</h2>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
      {/* Add controls for filtering */}
    </div>
  );
};

export default TransactionsCharts;

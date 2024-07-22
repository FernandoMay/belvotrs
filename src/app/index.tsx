import React, { useEffect, useState }  from 'react';
import TransactionsTable from '../app/transactionsTable';
import TransactionsCharts from '../app/transactionsCharts';
// import { createLink } from '../app/belvoService';

const Home: React.FC = () => {
    // const [linkId, setLinkId] = useState<string | null>(null);

    // useEffect(() => {
    //   const fetchLinkId = async () => {
    //     const id = await createLink();
    //     setLinkId(id);
    //   };
  
    //   fetchLinkId();
    // }, []);
  
    // if (!linkId) return <p>Loading...</p>;
    
    const linkId : string = "0d3ffb69-f83b-456e-ad8e-208d0998d71d";

  return (
    <div>
      <h1>Belvo Transactions</h1>
      <TransactionsTable linkId={linkId} />
      <TransactionsCharts linkId={linkId} />
    </div>
  );
};

export default Home;

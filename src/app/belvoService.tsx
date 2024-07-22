import axios from 'axios';

const BASE_URL = 'https://sandbox.belvo.com';
const SECRET_ID = process.env.NEXT_PUBLIC_BELVO_SECRET_ID;
const SECRET_PASSWORD = process.env.NEXT_PUBLIC_BELVO_SECRET_PASSWORD;

const getAuthHeaders = () => {
  return {
    'Authorization': 'Basic ' + Buffer.from(`${SECRET_ID}:${SECRET_PASSWORD}`).toString('base64'),
    'Content-Type': 'application/json'
  };
};

export const getTransactions = async (linkId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/transactions/`, {
      headers: getAuthHeaders(),
      params: {
        link: linkId,
        date_from: '2023-04-01',
        date_to: '2023-07-01',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// export const createLink = async () => {
//     try {
//       const response = await axios.post(
//         `${BASE_URL}/api/links/`,
//         {
//           institution: 'erebor_mx_retail',
//           username: 'username',
//           password: 'password',
//           access_mode: 'single'
//         },
//         {
//           headers: getAuthHeaders()
//         }
//       );
  
//       return response.data.id; // Este es el linkId
//     } catch (error) {
//       console.error('Error creating link:', error);
//       throw error;
//     }
//   };
import axios from 'axios';

const getAPI = async () => {
  const response = await axios.get(import.meta.env.VITE_KEY, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key':
        'live_yRPIX7nMuZDUJUYBIOHwwGzcwUTkHQYHYoGEQQvbnZ5P7yRHLwanXpHE8GCT0Fqs',
    },
  });
  console.log(response.data);
  console.log('fetch...');
  return response.data;
};
export { getAPI };

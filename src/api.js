import axios from 'axios';

const PublicKey = 'b37388fcfae95bf1869fe48184712196';

export default axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: PublicKey,
    limit: '10',
  },
});

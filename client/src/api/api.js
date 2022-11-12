import axios from 'axios';

export async function getDocs() {
  let docs = await axios.get('http://localhost:3000/docs');

  return await docs;
}






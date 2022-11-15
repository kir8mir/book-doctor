import axios from 'axios';

export async function getDocs() {
  let docs = await axios.get('https://doctor-book.herokuapp.com/docs');

  return await docs;
}






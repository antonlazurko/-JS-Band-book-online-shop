import axios from 'axios';

axios.defaults.baseURL = 'https://js-band-store-api.glitch.me/';

const userLogin = async (userName) => {
  const { data } = await axios.post('signin', {
    username: userName,
  });
  console.log(data);
  return data;
};

const getBooks = async (token) => {
  console.log('books');

  const { data } = await axios.get('books', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(data);

  return data;
};

const getBookById = async (id, token) => {
  const { data } = await axios.get(`books/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const purchase = async (books, token) => {
  const { data } = await axios.get('books/purchase', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export default {
  getBookById,
  getBooks,
  userLogin,
  purchase,
};

import axios from 'axios';

axios.defaults.baseURL = 'https://js-band-store-api.glitch.me/';

const userLogin = async (userName) => {
  const { data } = await axios.post('signin', {
    username: userName,
  });
  return data;
};

const getBooks = async (token) => {
  const { data } = await axios.get('books', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
  const { data } = await axios.post(
    'purchase',
    {
      books: [...books],
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
};

export default {
  getBookById,
  getBooks,
  userLogin,
  purchase,
};

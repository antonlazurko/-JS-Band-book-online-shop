import mockAxios from 'axios';
import services from '../services/services';

const booksArray = [
  {
    id: '2',
    title: 'Apuntes de Javascript I - Nivel Avanzado',
    author: 'JuanMa Garrido',
    description:
      '(En Castellano) Revision de conceptos (actuales) de javascript avanzados',
    level: 'Advanced',
    cover:
      'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-avanzado.png',
    price: 57.93,
    count: 1,
  },
  {
    id: '1',
    title: 'Apuntes de Javascript II - Nivel Avanzado',
    author: 'Juan Gar',
    description:
      '(En Castellano) Revision de conceptos (actuales) de javascript avanzados',
    level: 'Advanced',
    cover: 'https://jsbooks.revolunet.com/img/cover-apuntes.png',
    price: 60.9,
    count: 7,
  },
];

jest.mock('axios');
mockAxios.post.mockImplementation(() =>
  Promise.resolve({
    data: {
      username: 'Name',
      avatar: 'String',
      token: 'String',
    },
  }),
);
mockAxios.get.mockImplementation(() =>
  Promise.resolve({
    data: {
      books: booksArray,
    },
  }),
);
test('data name should be "name"', async () => {
  const data = await services.userLogin('Name');
  expect(data.username).toBe('Name');
});
test('data should be object with property "books" which contains array "booksArray"', async () => {
  const data = await services.getBooks('string');
  expect(data.books).toStrictEqual(booksArray);
});

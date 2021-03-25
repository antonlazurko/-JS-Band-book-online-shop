import booksActions from '../redux/books/books-actions';
import cartActions from '../redux/cart/cart-actions';
import reducers from '../redux/books/books-reducers';
import cartReducers from '../redux/cart/cart-reducers';
import booksOperations from '../redux/books/books-operations';

describe('books reducer', () => {
  test('should return the initial state', () => {
    expect(reducers.books([], {})).toEqual([]);
  });

  test('should handle books/changeFilter', () => {
    expect(
      reducers.filter('', {
        type: 'books/changeFilter',
        payload: 'string',
      }),
    ).toEqual('string');
  });
  const authInitialState = {
    userName: 'string',
    avatar: 'string',
    token: 'string',
    isLoggedIn: true,
  };
  expect(
    reducers.authorization(authInitialState, {
      type: 'books/signOut',
    }),
  ).toEqual({
    userName: undefined,
    avatar: '',
    token: '',
    isLoggedIn: false,
  });
});
describe('cart reducer', () => {
  const book = {
    bookId: '1',
    title: 'title',
    price: 15,
    count: 10,
  };
  test('should return the initial state', () => {
    expect(
      cartReducers.cart([], { type: 'cart/addToCart', payload: book }),
    ).toEqual([book]);
  });
});

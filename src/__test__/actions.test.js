import booksActions from '../redux/books/books-actions';
import cartActions from '../redux/cart/cart-actions';

describe('booksActions', () => {
  it('should create an action to change filter', () => {
    const text = 'name';
    const expectedAction = {
      type: 'books/changeFilter',
      payload: text,
    };
    expect(booksActions.changeFilter(text)).toEqual(expectedAction);
  });
});
describe('cartActions', () => {
  it('should create an action addToCart', () => {
    const book = {
      bookId: '1',
      title: 'title',
      price: 15,
      count: 10,
    };
    const expectedAction = {
      type: 'cart/addToCart',
      payload: book,
    };
    expect(cartActions.addToCart(book)).toEqual(expectedAction);
  });
});

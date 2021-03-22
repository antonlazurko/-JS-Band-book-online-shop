import { createSelector } from 'reselect';
import { getFiltredBooks } from '../redux/books/selectors';

const getBooksSelector = [];
const getFilter = '';

describe('>>>A C T I O N --- Test filterAction', () => {
  it('+++ actionCreator changeFilter', () => {
    const getFiltredBooks = createSelector(
      [getBooksSelector, getFilter],
      (books, filter) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        books.filter(
          (book) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            book.title.toLowerCase().includes(filter.toLowerCase()),
          // eslint-disable-next-line function-paren-newline
        ),
    );
    expect(filter).toEqual({ payload: 'qwerty', type: 'books/changeFilter' });
  });
});

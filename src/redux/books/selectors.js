import { createSelector } from 'reselect';

const getIsLoggedIn = (state) => state.authorization.isLoggedIn;
const getTokenSelector = (state) => state.authorization.token;
const getBooksSelector = (state) => state.books;
const getFilter = (state) => state.books.filter;

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

export default {
  getTokenSelector,
  getBooksSelector,
  getFiltredBooks,
  getFilter,
  getIsLoggedIn,
};

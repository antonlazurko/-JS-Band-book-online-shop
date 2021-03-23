import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import booksOperations from '../../redux/books/books-operations';
import booksActions from '../../redux/books/books-actions';
import selectors from '../../redux/books/selectors';
import Card from '../../components/Card/Card';

const CatalogView = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectors.getBooksSelector);
  const filtredBooks = useSelector(selectors.getFiltredBooks);
  const token = useSelector(selectors.getTokenSelector);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    dispatch(booksActions.changeFilter(filterValue));
  }, [filterValue]);
  useEffect(() => {
    dispatch(booksOperations.getBooks(token));
  }, []);
  return (
    <>
      {books && (
        <ul>
          <input
            value={filterValue}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={(e) => setFilterValue(e.target.value)}
          />
          {filtredBooks.map((book) => (
            <Card book={book} key={book.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CatalogView;

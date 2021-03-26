/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { booksOperations, booksActions, selectors } from 'redux/books';
import { Card } from 'components';
import styles from './CatalogView.module.css';

const CatalogView = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectors.getTokenSelector);

  // getting books collection from API
  useEffect(() => {
    dispatch(booksOperations.getBooks(token));
  }, []);
  const filtredBooks = useSelector(selectors.getFiltredBooks);
  const [filterValue, setFilterValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [booksByPrice, setBooksByPrice] = useState(filtredBooks);

  // getting filtred books by name
  useEffect(() => {
    dispatch(booksActions.changeFilter(filterValue));
  }, [filterValue]);

  // getting filtred books by price
  useEffect(() => {
    switch (selectValue) {
      case '':
        setBooksByPrice(filtredBooks);
        break;
      case '0':
        setBooksByPrice(filtredBooks.filter((book) => book.price <= 25));
        break;
      case '1':
        setBooksByPrice(
          filtredBooks.filter((book) => book.price > 25 && book.price <= 50),
        );
        break;
      case '2':
        setBooksByPrice(filtredBooks.filter((book) => book.price > 50));
        break;
      default:
        setBooksByPrice(filtredBooks);
        break;
    }
  }, [selectValue, filtredBooks]);

  return (
    <>
      {booksByPrice && (
        <>
          <div className={styles.filters}>
            <input
              style={{
                width: '250px',
                marginRight: '15px',
              }}
              className="input-group"
              value={filterValue}
              type="text"
              autoComplete="off"
              placeholder="search"
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <form
              className="input-group"
              method="post"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <select name="price">
                <option defaultValue="">Price</option>
                <option value="0">0 &lt; price &lt; 25</option>
                <option value="1">25 &lt; price &lt; 50</option>
                <option value="2">50 &gt;</option>
              </select>
            </form>
          </div>
          <ul className={styles.booksList}>
            {booksByPrice.map((book) => (
              <Card book={book} key={book.id} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CatalogView;

/* eslint-disable import/no-unresolved */ /* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { booksOperations, selectors, booksActions } from 'redux/books';
import { cartActions, cartSelectors } from 'redux/cart';

import defaultBook from 'images/default-book.png';
import styles from './BookView.module.css';

const toastPosition = toast.POSITION.TOP_CENTER;

const BookView = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const token = useSelector(selectors.getTokenSelector);
  const {
    cover,
    description,
    author,
    title,
    level,
    price,
    count,
  } = useSelector(selectors.getBook);
  const cartInfo = useSelector(cartSelectors.getCartInfo);

  // getting current book from API
  useEffect(async () => {
    await dispatch(booksOperations.getBookById({ bookId, token }));
    const isBookInCart = cartInfo.find((book) => book.bookId === bookId);
    if (isBookInCart) {
      dispatch(booksActions.bookRefreshAction(isBookInCart.count));
    }
  }, []);

  // setting cuerrent books count for cart
  const [booksCount, setBooksCount] = useState(0);

  const handleAddToCartBtn = () => {
    if (!booksCount) {
      toast.info('Select the required books quantity', {
        position: toastPosition,
      });
      return;
    }
    if (booksCount > count) {
      toast.info(`Sorry we have only ${count} books`, {
        position: toastPosition,
      });
      return;
    }
    dispatch(
      cartActions.addToCart({
        bookId,
        title,
        price,
        count: booksCount,
      }),
    );
  };
  const totalPrice = (price * booksCount).toFixed(2);
  return (
    <div className={styles.book}>
      <div className={styles.bookField}>
        <div className={styles.bookDescription}>
          <img src={cover ?? defaultBook} width="200px" />
          <p>{description}</p>
        </div>
        <div className={styles.title}>
          <h5>{title}</h5> <h6>{author}</h6>
          <p>{level}</p>
        </div>
      </div>
      <div className={styles.cartField}>
        <p>Price, $ {price}</p>
        <label
          htmlFor="bookCount"
          onChange={(e) => {
            setBooksCount(Number(e.target.value));
          }}
        >
          Count
          <input
            step="1"
            type="number"
            id="bookCount"
            name="bookCount"
            min="0"
            max={count}
          ></input>
        </label>
        <p>Total Price, $ {totalPrice}</p>
        {!count && <p>Not enough books</p>}
        <button
          className="btn btn-outline-secondary"
          type="button"
          disabled={!count}
          onClick={() => handleAddToCartBtn()}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default BookView;

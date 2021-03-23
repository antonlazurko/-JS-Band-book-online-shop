import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import booksOperations from '../../redux/books/books-operations';
import selectors from '../../redux/books/selectors';
import cartActions from '../../redux/cart/cart-actions';
import styles from './BookView.module.css';

const BookView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
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
  useEffect(() => {
    dispatch(booksOperations.getBookById({ id, token }));
  }, []);
  const [booksCount, setBooksCount] = useState(1);
  return (
    <div className={styles.book}>
      <div className={styles.bookField}>
        <div className={styles.bookDescription}>
          <img src={cover} width="200px" />
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
            type="number"
            id="bookCount"
            name="bookCount"
            min="1"
            max={count}
          ></input>
        </label>
        <p>Total Price, $ {price * booksCount}</p>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            dispatch(
              cartActions.addToCart({
                bookId: id,
                title,
                price,
                count: booksCount,
              }),
            );
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default BookView;

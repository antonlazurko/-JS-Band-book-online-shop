import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import booksOperations from '../../redux/books/books-operations';
import selectors from '../../redux/books/selectors';
import cartActions from '../../redux/cart/cart-actions';

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
    <>
      <div className="bookDetails">
        <img src={cover} width="200px" />
        <p>{description}</p>
        <h2>{title}</h2> <h3>{author}</h3>
        <p>{level}</p>
      </div>
      <div className="cartField">
        <p>Price, ${price}</p>
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
        <p>Total Price, ${price * booksCount}</p>
        <button
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
    </>
  );
};
export default BookView;

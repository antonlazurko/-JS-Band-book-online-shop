/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-unresolved */
import { useSelector, useDispatch } from 'react-redux';

import { cartSelectors, cartOperations } from 'redux/cart';
import { CartModal } from 'components';
import { selectors } from 'redux/books';
import cart from 'images/cart.png';
import styles from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartInfo = useSelector(cartSelectors.getCartInfo);
  const cartModal = useSelector(cartSelectors.getCartModal);
  const token = useSelector(selectors.getTokenSelector);

  return (
    <div className={styles.cart}>
      {cartModal && <CartModal />}
      <button
        type="button"
        className="btn btn-outline-secondary"
        style={{ width: '100px' }}
        disabled={cartInfo.length === 0}
        onClick={() =>
          dispatch(
            cartOperations.purchaseOperation({
              books: cartInfo.map((book) => book.bookId),
              token,
            }),
          )
        }
      >
        Purchase
      </button>
      {cartInfo.length === 0 ? (
        <div>
          <img src={cart} alt="cart" />
          Cart empty
        </div>
      ) : (
        <div>
          <table bordered="true" className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartInfo.map((book) => (
                <tr key={book.bookId}>
                  <td>{book.title}</td>
                  <td>{book.count}</td>
                  <td>{book.price}</td>
                  <td>{book.price * book.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            Total price:
            {cartInfo.reduce((acc, book) => acc + book.count * book.price, 0)}$
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;

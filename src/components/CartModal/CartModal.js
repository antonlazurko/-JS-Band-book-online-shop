/* eslint-disable import/no-unresolved */ /* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { cartActions } from 'redux/cart';
import styles from './CartModal.module.css';

const CartModal = ({ cartInfo }) => {
  const dispatch = useDispatch();
  const totalPrice = cartInfo
    .reduce((acc, book) => acc + book.count * book.price, 0)
    .toFixed(2);
  return (
    <div className={styles.authModalBackdrop}>
      <div className={styles.authModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title">You successfully placed on order!</p>
            </div>
            <div className="modal-body">
              <div>
                <table border="1px" className="table">
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
                        <td>{(book.price * book.count).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div>
                  Total price:
                  {totalPrice}$
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => {
                  dispatch(cartActions.cartModalClose());
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CartModal.propTypes = {
  cartInfo: PropTypes.arrayOf(PropTypes.object),
};
export default CartModal;

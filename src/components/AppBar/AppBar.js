/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { booksActions, selectors } from 'redux/books';
import { cartSelectors } from 'redux/cart';
import cart from 'images/cart.png';

import styles from './AppBar.module.css';

const AppBar = () => {
  const dispatch = useDispatch();

  // initialize user and cart info
  const { userName, avatar } = useSelector(selectors.getUserInfo);
  const cartInfo = useSelector(cartSelectors.getCartInfo);

  return (
    <div className="AppBar">
      <div className={styles.userMenu}>
        <p>
          <img src={avatar} alt="avatar" width="40px" />
          Wellcome
          <span
            style={{ color: 'blue', marginRight: '15px', marginLeft: '7px' }}
          >
            {userName}
          </span>
        </p>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => dispatch(booksActions.signOutAction())}
        >
          Sign out
        </button>
      </div>
      <div>
        <hr />
        <div className={styles.header}>
          <Link
            exact="true"
            to="/js-band-book-online-shop/catalog"
            style={{ color: 'black' }}
          >
            <h2>JS Band Store</h2>
          </Link>
          <Link to="/js-band-book-online-shop/cart" style={{ color: 'black' }}>
            <img src={cart} alt="cart" />
            Cart(
            {cartInfo.reduce((acc, book) => acc + book.count, 0)})
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default AppBar;

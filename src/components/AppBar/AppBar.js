import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import booksActions from '../../redux/books/books-actions';
import selectors from '../../redux/books/selectors';
import cartSelectors from '../../redux/cart/cart-selectors';

import styles from './AppBar.module.css';
import cart from '../../images/cart.png';

const AppBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectors.getUserName);
  const cartInfo = useSelector(cartSelectors.getCartInfo);
  return (
    <div>
      <div className={styles.userMenu}>
        <p>
          Wellcome
          <span
            style={{ color: 'red', marginRight: '15px', marginLeft: '7px' }}
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
          <h2>JS Band Store</h2>
          <NavLink to="/cart" style={{ color: 'black' }}>
            <img src={cart} alt="cart" />
            Cart(
            {cartInfo.reduce((acc, book) => acc + book.count, 0)})
          </NavLink>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default AppBar;

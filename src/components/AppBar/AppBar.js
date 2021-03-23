import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import booksActions from '../../redux/books/books-actions';
import selectors from '../../redux/books/selectors';

const AppBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectors.getUserName);
  return (
    <div>
      <h1>JS Band Store</h1>
      <div>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      <p>{userName}</p>
      <button
        type="button"
        onClick={() => dispatch(booksActions.signOutAction())}
      >
        Sign out
      </button>
    </div>
  );
};
export default AppBar;

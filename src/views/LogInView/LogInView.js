import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import booksOperations from '../../redux/books/books-operations';
import logo from '../../images/default-user.jpg';
import styles from './LoginView.module.css';

const LogInView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [filterValue, setFilterValue] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    if (filterValue.length > 3 && filterValue.length <= 16) {
      await dispatch(booksOperations.logIn(filterValue));
      setFilterValue('');
      history.push('/catalog/');
    }
  };
  return (
    <div className={styles.login}>
      <img src={logo} alt="default user" />
      <h1>JS Band Store</h1>
      <form style={{ width: 'auto' }} onSubmit={onSubmit}>
        <label className="input-group">Name</label>
        <input
          className="input-group"
          value={filterValue}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <button className="btn btn-secondary input-group" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};
export default LogInView;

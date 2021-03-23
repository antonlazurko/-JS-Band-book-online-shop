import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import booksOperations from '../../redux/books/books-operations';

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
    <div className="login">
      <img />
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          value={filterValue}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <button type="submit">
          <span>Log in</span>
        </button>
      </form>
    </div>
  );
};
export default LogInView;

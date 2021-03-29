/* eslint-disable import/no-unresolved */ /* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { booksOperations } from 'redux/books';
import logo from 'images/default-user.jpg';
import styles from './LoginView.module.css';

const toastPosition = toast.POSITION.TOP_CENTER;

const LogInView = () => {
  const dispatch = useDispatch();
  const [loginName, setLoginName] = useState('');
  const loginNameLength = loginName.length;

  // submit user's name and logining to system with validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginNameLength < 4) {
      toast.error('Name must be longer than 3 characters!', {
        position: toastPosition,
      });
      return;
    }
    if (loginNameLength > 16) {
      toast.error('Name must be shorter than 17 characters!', {
        position: toastPosition,
      });
      return;
    }
    await dispatch(booksOperations.logIn(loginName));
    setLoginName('');
  };

  return (
    <div className={styles.login}>
      <img src={logo} alt="default user" />
      <h1>JS Band Store</h1>
      <form style={{ width: 'auto' }} onSubmit={handleSubmit}>
        <label className="input-group">Name</label>
        <input
          className="input-group"
          value={loginName}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={(e) => setLoginName(e.target.value)}
        />
        <button className="btn btn-secondary input-group" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};
export default LogInView;

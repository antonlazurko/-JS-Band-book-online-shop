/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { booksOperations } from 'redux/books';
import logo from 'images/default-user.jpg';
import styles from './LoginView.module.css';

const LogInView = () => {
  const dispatch = useDispatch();
  const [loginName, setLoginName] = useState('');

  // submit user's name and logining to system with validation
  const onSubmit = async (e) => {
    e.preventDefault();
    if (loginName.length > 3 && loginName.length <= 16) {
      await dispatch(booksOperations.logIn(loginName));
      setLoginName('');
      return true;
    }
    if (loginName.length < 4) {
      toast.error(`Name must be longer than ${loginName.length} characters!`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    toast.error(`Name must be shorter than ${loginName.length} characters!`, {
      position: toast.POSITION.TOP_CENTER,
    });
    return false;
  };

  return (
    <div className={styles.login}>
      <img src={logo} alt="default user" />
      <h1>JS Band Store</h1>
      <form style={{ width: 'auto' }} onSubmit={onSubmit}>
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

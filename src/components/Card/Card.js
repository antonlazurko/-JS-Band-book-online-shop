import React from 'react';
import PropTypes from 'prop-types';

import { Link, useHistory } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom';

import styles from './Card.module.css';

const Card = ({ book }) => {
  // initialize current url for redirect to current book
  // const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <li className={styles.card}>
      <img src={book.cover} width="100%" />
      <h4 className="title">{book.title}</h4> <h5>{book.author}</h5>
      <h6>{book.price}$</h6>
      {/* <Link to={`${url}/${book.id}`} style={{ color: 'black' }}>
        <button className="btn btn-outline-secondary">View</button>
      </Link> */}
      <button
        className="btn btn-outline-secondary"
        onClick={() => {
          history.push(`/catalog/${book.id}`);
        }}
      >
        View
      </button>
    </li>
  );
};
Card.propTypes = {
  book: PropTypes.object,
};
export default Card;

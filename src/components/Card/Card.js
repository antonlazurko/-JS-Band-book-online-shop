import { useHistory } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ book }) => {
  const history = useHistory();
  return (
    <li className={styles.card}>
      <img src={book.cover} width="100%" />
      <h4>{book.title}</h4> <h5>{book.author}</h5>
      <h6>{book.price}$</h6>
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
export default Card;

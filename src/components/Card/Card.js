import { useHistory } from 'react-router-dom';

const Card = ({ book }) => {
  const history = useHistory();
  return (
    <li>
      <img src={book.cover} width="200px" />
      <h2>{book.title}</h2> <h3>{book.author}</h3>
      <h4>{book.price}</h4>
      <button
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

const Card = ({ book }) => (
  <li>
    <img src={book.cover} width="200px" />
    <h2>{book.title}</h2> <h3>{book.author}</h3>
    <h4>{book.price}</h4>
    <button>View</button>
  </li>
);
export default Card;

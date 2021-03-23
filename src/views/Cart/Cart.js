import { useSelector } from 'react-redux';
import cartSelectors from '../../redux/cart/cart-selectors';
import services from '../../services/services';
import selectors from '../../redux/books/selectors';
import cart from '../../images/cart.png';

const Cart = () => {
  const cartInfo = useSelector(cartSelectors.getCartInfo);
  const token = useSelector(selectors.getTokenSelector);

  return (
    <>
      {cartInfo.length === 0 ? (
        <p>
          <img src={cart} alt="cart" />
          Cart empty
        </p>
      ) : (
        <div>
          <button
            type="button"
            onClick={() => {
              services.purchase(
                cartInfo.map((book) => book.bookId),
                token,
              );
            }}
          >
            Purchase
          </button>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartInfo.map((book) => (
                <tr key={book.bookId}>
                  <td>{book.title}</td>
                  <td>{book.count}</td>
                  <td>{book.price}</td>
                  <td>{book.price * book.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            {cartInfo.reduce((acc, book) => acc + book.count * book.price, 0)}
          </p>
        </div>
      )}
    </>
  );
};
export default Cart;

/* eslint-disable import/no-unresolved */
import { useDispatch } from 'react-redux';
import { cartActions } from 'redux/cart';

const CartModal = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        console.log('click');
        dispatch(cartActions.cartModalClose());
      }}
    ></button>
  );
};

export default CartModal;

import { NavLink } from 'react-router-dom';

const AppBar = () => (
  <div>
    <h1>JS Band Store</h1>
    <div>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  </div>
);
export default AppBar;

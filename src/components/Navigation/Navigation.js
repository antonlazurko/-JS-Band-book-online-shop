import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from '../../redux/books/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);
  return (
    <>
      {!isLoggedIn ? (
        <>
          <NavLink
            to="/login"
            className="{link}"
            activeClassName="{activeLink}"
          >
            Login
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/catalog"
            className="{link}"
            activeClassName="{activeLink}"
          >
            Catalog
          </NavLink>
        </>
      )}
    </>
  );
};
export default Navigation;

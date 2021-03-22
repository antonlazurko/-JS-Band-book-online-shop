import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import selectors from '../../redux/books/selectors';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/catalog/"
      className="{styles.link}"
      activeClassName="{styles.activeLink}"
    >
      Catalog
    </NavLink>

    <NavLink
      to="/login"
      className="{styles.link}"
      activeClassName="{styles.activeLink}"
    >
      Login
    </NavLink>
  </nav>
);
export default Navigation;

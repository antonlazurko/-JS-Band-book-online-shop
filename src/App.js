import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';

// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppBar, Container } from './components';
import { selectors } from './redux/books';

import './App.css';

// lazy import
const LogInView = lazy(() => import('./views/LogInView'));
const CatalogView = lazy(() => import('./views/CatalogView'));
const BookView = lazy(() => import('./views/BookView'));
const Cart = lazy(() => import('./views/Cart/Cart'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

function App() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  return (
    <Container>
      {isLoggedIn && <AppBar />}
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route exact path="/js-band-book-online-shop/">
            {isLoggedIn ? (
              <Redirect to="/js-band-book-online-shop/catalog" />
            ) : (
              <Redirect to="/js-band-book-online-shop/login" />
            )}
          </Route>
          <Route exact path="/js-band-book-online-shop/catalog">
            {isLoggedIn ? (
              <CatalogView />
            ) : (
              <Redirect to="/js-band-book-online-shop/login" />
            )}
          </Route>
          <Route path="/js-band-book-online-shop/catalog/:id">
            {isLoggedIn ? (
              <BookView />
            ) : (
              <Redirect to="/js-band-book-online-shop/login" />
            )}
          </Route>
          <Route path="/js-band-book-online-shop/cart">
            {isLoggedIn ? (
              <Cart />
            ) : (
              <Redirect to="/js-band-book-online-shop/login" />
            )}
          </Route>
          <Route path="/js-band-book-online-shop/login">
            {!isLoggedIn ? (
              <LogInView />
            ) : (
              <Redirect exact to="/js-band-book-online-shop/catalog" />
            )}
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
        <ToastContainer autoClose={1800} />
      </Suspense>
    </Container>
  );
}

export default App;

import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';

// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from './components/AppBar/AppBar';
import selectors from './redux/books/selectors';
import Container from './components/Container/Container';
import './App.css';

// lazy import
const LogInView = lazy(() => import('./views/LogInView/LogInView'));
const CatalogView = lazy(() => import('./views/CatalogView/CatalogView'));
const BookView = lazy(() => import('./views/BookView/BookView'));
const Cart = lazy(() => import('./views/Cart/Cart'));
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

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
          <Route exact path="/catalog/">
            {isLoggedIn ? <CatalogView /> : <Redirect to="/login" />}
          </Route>
          <Route path="/catalog/:id">
            {isLoggedIn ? <BookView /> : <Redirect to="/login" />}
          </Route>
          <Route path="/cart">
            {isLoggedIn ? <Cart /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <LogInView />
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

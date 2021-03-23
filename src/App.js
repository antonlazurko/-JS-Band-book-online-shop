import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line import/no-unresolved
// import 'bootstrap/dist/css/bootstrap.min.css';

import AppBar from './components/AppBar/AppBar';
import selectors from './redux/books/selectors';
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
    <>
      {isLoggedIn && <AppBar />}
      <Suspense fallback={<div>Downloading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;

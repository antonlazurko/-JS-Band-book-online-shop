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
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

function App() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Downloading...</div>}>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <CatalogView /> : <Redirect to="/login" />}
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

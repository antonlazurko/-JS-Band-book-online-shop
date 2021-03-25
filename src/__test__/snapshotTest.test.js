import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import jest from 'jest';
import configureStore from 'redux-mock-store';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import BookView from '../views/BookView/BookView';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';
import AppBar from '../components/AppBar/AppBar';
import LoginView from '../views/LoginView/LoginView';

const initialState = {
  authorization: { userName: 'anton' },
  cart: [],
};
const mockStore = configureStore();
configure({ adapter: new Adapter() });
describe('Container', () => {
  test('should render Container', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <Container />
          </Route>
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('BookView', () => {
  test('should render BookView', () => {
    const store = mockStore(initialState);

    const component = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <BookView />
          </Route>
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
describe('Card', () => {
  const book = {
    cover: 'string',
    title: 'string',
    id: '1',
    count: 2,
    price: 14,
  };
  test('should render Card', () => {
    const store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <Card book={book} />
          </Route>
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('AppBar', () => {
  test('should render AppBar component"', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <AppBar child={<div>I am child</div>} />
          </Route>
        </BrowserRouter>
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
describe('LoginView', () => {
  test('should render LoginView component"', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <LoginView />
          </Route>
        </BrowserRouter>
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});

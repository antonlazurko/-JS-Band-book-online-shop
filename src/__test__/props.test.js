import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { render } from '@testing-library/react';
import CartModal from '../components/CartModal/CartModal';
import Container from '../components/Container/Container';

configure({ adapter: new Adapter() });

describe('CartModal', () => {
  const initialState = {
    authorization: { userName: 'anton' },
    cart: { cart: [] },
  };
  const cartInfo = [
    {
      bookId: '1',
      count: 2,
      title: 'string',
      price: 15,
    },
  ];
  const mockStore = configureStore();

  test('should render CartModal', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <CartModal cartInfo={cartInfo} />
          </Route>
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
describe('Container', () => {
  const initialState = {
    authorization: { userName: 'anton' },
    cart: { cart: [] },
  };
  const mockStore = configureStore();

  test('should render Container', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <Container children={<div>I am children</div>} />
          </Route>
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

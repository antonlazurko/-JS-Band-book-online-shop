import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';
import AppBar from '../components/AppBar/AppBar';
import BookView from '../views/BookView/BookView';
import CatalogView from '../views/CatalogView/CatalogView';
import Cart from '../views/Cart/Cart';
import LoginView from '../views/LoginView/LoginView';

configure({ adapter: new Adapter() });
const book = {
  cover: 'string',
  title: 'string',
  id: '1',
  count: 2,
  price: 14,
};
const initialState = {
  filter: '',
  books: [],
  bookDetails: {
    cover: 'string',
    description: 'text',
    author: 'author',
    title: 'title',
    level: '1',
    price: 15,
    count: 10,
  },
  token: 'string',
  authorization: { userName: 'anton' },
  cart: [book],
};
const mockStore = configureStore();

describe('Contaier', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Container />, div);
  });
  test('should render Contaier component', () => {
    const component = shallow(<Container />);
    const wrapper = component.find('.container');
    expect(wrapper.length).toBe(1);
  });
});

describe('Card', () => {
  test('should find button in Card component', () => {
    const component = shallow(<Card book={book} />);
    const wrapper = component.find('.btn');
    expect(wrapper.length).toBe(1);
  });

  test('should be correct book title in Card component', () => {
    const component = shallow(<Card book={book} />);
    const wrapper = component.find('.title');
    expect(wrapper.text()).toBe('string');
  });
});
describe('AppBar', () => {
  test('should render AppBar component"', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <AppBar />
          </Route>
        </BrowserRouter>
      </Provider>,
    );

    const wrapper = component.find('.btn');
    expect(wrapper.length).toBe(1);
  });
});
describe('BookView', () => {
  test('should render BookView component"', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <BookView />
          </Route>
        </BrowserRouter>
      </Provider>,
    );

    const wrapper = component.find('.btn');
    expect(wrapper.length).toBe(1);
  });
});
describe('CatalogView', () => {
  test('should render CatalogView component"', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <CatalogView />
          </Route>
        </BrowserRouter>
      </Provider>,
    );

    const wrapper = component.find('.input-group');
    expect(wrapper.length).toBe(2);
  });
});
describe('Cart', () => {
  test('should render Cart component"', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <Cart />
          </Route>
        </BrowserRouter>
      </Provider>,
    );
    const wrapper = component.find('.totalPrice');
    expect(wrapper.text()).toBe('Total price:28$');
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
    const wrapper = component.find('.input-group');
    expect(wrapper.length).toBe(3);
  });
});

import {} from '../redux/books/books-reducers';

describe('>>>R E D U C E R --- Test filterReducers', () => {
  it('+++ reducer for changeFilter', () => {
    let state = '';
    state = filter(state, {
      type: 'books/changeFilter',
      payload: 'qwerty',
    });
    expect(state).toEqual('qwerty');
  });
});

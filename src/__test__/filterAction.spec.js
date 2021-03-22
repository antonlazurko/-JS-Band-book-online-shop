import changeFilter from '../redux/books/books-actions';

describe('>>>A C T I O N --- Test filterAction', () => {
  it('+++ actionCreator changeFilter', () => {
    const filter = changeFilter('qwerty');
    expect(filter).toEqual({ payload: 'qwerty', type: 'books/changeFilter' });
  });
});

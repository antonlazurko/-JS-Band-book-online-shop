import mockAxios from 'axios';
import services from '../services/services';
jest.mock('axios');
describe('Login test', () => {
  mockAxios.post.mockImplementation(() =>
    Promise.resolve({
      data: {
        username: 'Name',
        avatar: 'String',
        token: 'String',
      },
    }),
  );
  test('data name should be "Name"', async () => {
    const data = await services.userLogin('Name');
    console.log(data);
    expect(data.username).toStrictEqual('Name');
  });
});

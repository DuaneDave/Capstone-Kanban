const getAllData = require('../module/getAllData.js');

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [
      {
        show: {
          id: 3234,
          url: 'https://www.tvmaze.com/shows/230/go-on',
          name: 'End War',
          type: 'Scripted',
          language: 'English',
        },
      },
      {
        show: {
          id: 656,
          url: 'https://www.tvmaze.com/shows/228/last-resort',
          name: 'Last Movie',
          type: 'Scripted',
          language: 'English',
        },
      },
    ],
  ),
}));

describe('items counter tests using Jest', () => {
  test('test getAllData function to the result', async () => {
    const response = await getAllData();

    expect(response).toBe(2);
  });
});
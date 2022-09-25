import cards from './cards.js';
import counter from './counter.js';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getJsonObj = await response.json();
  const result = getJsonObj.slice(0, 18);
  counter(result.length);

  const likes = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/likes');
  const res = await likes.json();
  cards(result, res);
};

const requestLikes = async (url, id) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  getData();
};

requestLikes();

const getComments = async (id) => {
  const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/comments?item_id=item${id}`);
  const response = comments.json();
  return response;
};

export { getData, requestLikes, getComments };

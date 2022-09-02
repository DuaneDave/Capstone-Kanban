const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/comments';

const postComment = async (data) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

const getComments = async (id) => {
  const getUrl = `?item_id=${id}`;
  const response = await fetch(url + getUrl);
  const data = await response.json();
  return data;
};

export { postComment, getComments };

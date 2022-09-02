const getComments = async (id) => {
  const getUrl = `?item_id=${id}`;
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/comments${getUrl}`);
  const data = await response.json();
  return data;
};

module.exports = getComments;
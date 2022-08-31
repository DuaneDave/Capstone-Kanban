import cards from './cards.js';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getJsonObj = await response.json();
  const result = getJsonObj.slice(0, 21);
  cards(result);
};
export default getData;
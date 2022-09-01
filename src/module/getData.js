import cards from './cards.js';
import countMovies from './counter.js';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getJsonObj = await response.json();
  const result = getJsonObj.slice(0, 18);
  cards(result);
  countMovies(result.length);
};
export default getData;
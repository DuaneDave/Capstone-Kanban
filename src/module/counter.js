const countMovies = (count) => {
  const counter = document.querySelector('#game-count');
  counter.innerHTML = `(${count})`;
};

export default countMovies;

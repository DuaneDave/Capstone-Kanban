import modal from './modal.js';

const cards = (games) => {
  const cards = document.querySelector('.cards');
  games.forEach((game, index) => {
    const innerHtml = `
    <div class="card" id="card">
      <img src="${game.image.original}" class="card-img"/>
      <div class="social flex">
        <span class="details">${game.name}</span>
        <div class="like flex">
          <i class="bx bx-heart"></i>
          <span>${game.id}</span>
        </div>
      </div>
      <button id="pop-up" data-id="${index}">Comments</button>
    </div>`;
    cards.innerHTML += innerHtml;
  });

  const popUp = document.querySelectorAll('#pop-up');
  popUp.forEach((pop) => {
    pop.addEventListener('click', (e) => {
      const modalPanel = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      modalPanel.classList.remove('hidden');
      modalContent.classList.add('active');
      modal(games, e.target.dataset.id);

      const closeBtn = document.querySelector('.bx-x');
      closeBtn.addEventListener('click', () => {
        modalPanel.classList.add('hidden');
        modalContent.classList.remove('active');
      });
    });
  });
};

export default cards;

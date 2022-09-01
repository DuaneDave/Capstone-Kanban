/* eslint-disable import/no-cycle */

import modal from './modal.js';
import { requestLikes } from './getData.js';

const cards = (games, data) => {
  const cards = document.querySelector('.cards');
  cards.innerHTML = '';
  games.forEach((game, index) => {
    const id = data.findIndex((like) => +like.item_id === index);
    const msgLikes = id >= 0 ? data[id].likes : 0;
    const innerHtml = `
    <div class="card" id="card">
      <img src="${game.image.original}" class="card-img" />
      <div class="social flex">
        <span class="details">${game.name}</span>
        <div class="like flex">
          <i class="bx bx-heart" data-id="${index}"></i>
          <span>${msgLikes}</span>
        </div>
      </div>
      <button id="pop-up" data-id="${index}">Comments</button>
    </div>`;
    cards.innerHTML += innerHtml;
  });

  const popUp = document.querySelectorAll('#pop-up');
  popUp.forEach((pop) => {
    pop.addEventListener('click', async (e) => {
      const modalPanel = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      modalPanel.classList.remove('hidden');
      modalContent.classList.add('active');
      await modal(games, e.target.dataset.id);

      const closeBtn = document.querySelector('.bx-x');
      closeBtn.addEventListener('click', () => {
        modalPanel.classList.add('hidden');
        modalContent.classList.remove('active');
      });
    });
  });

  const likeBtn = document.querySelectorAll('.bx-heart');
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/likes';
  likeBtn.forEach((like) => {
    like.addEventListener('click', (e) => {
      requestLikes(url, e.target.dataset.id);
    });
  });
};

export default cards;

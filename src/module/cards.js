import modal from './modal.js';

const cards = (games,likedResult) => {
  const cards = document.querySelector('.cards');
  games.forEach((game, index) => {
    const indexlike = likedResult.findIndex((like) => like.item_id === game.id);
    const msgLikes = index >= 0 ? likedResult[index].likes : 0;
    const innerHtml = `
    <div class="card" id="card">
      <img src="${game.image.original}" class="card-img"/>
      <div class="social flex">
        <span class="details">${game.name}</span>
        <div class="like flex">
        <i class="bx bx-heart" data-pos=${game.id}></i>
        <span class="game-id">${msgLikes}</span>
        </div>
      </div>
      <button id="pop-up" data-id="${index}" data-pos=${game.id}>Comments</button>
    </div>`;
    cards.innerHTML += innerHtml;
  });

  const likeButtons = document.querySelectorAll('.bx-heart');
    likeButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const gameId = e.target.dataset.pos;
        console.log(gameId);
        addLike(gameId, btn);
        btn.disabled = true;
      }, { once: true });
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


  const addLike = async (itemId, likeButton) => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g47Ybpe3Iv9MLdD87d0m/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
    }).then((response) => response.text(response)).then((json) => json);
    const likedList = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g47Ybpe3Iv9MLdD87d0m/likes').then((response) => response.json());
    const index = likedList.findIndex((like) => like.item_id === itemId);
    const msgLikes = index >= 0 ? likedList[index].likes : 0;
    likeButton.nextElementSibling.innerHTML = msgLikes;
  }

};

export default cards;
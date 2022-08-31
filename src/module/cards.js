const addLike = require('./getData.js');
const cards = (games,likedList) => {
    const cards = document.querySelector('.cards');
    games.forEach((game) => {
        const index = likedList.findIndex((like) => like.item_id === game.id);
        const msgLikes = index >= 0 ? likedList[index].likes : 0;
        let innerHtml = `<div class="card" id="card">
          <img src="${game.image.original}" class="card-img"/>
          <div class="social flex">
            <span class="details">${game.name}</span>
            <div class="like flex">
              <i class="bx bx-heart"></i>
              <span class="game-id">${msgLikes}</span>
            </div>
             </div>
             <button>Comments</button>
            </div>`
        cards.innerHTML += innerHtml;
    });

    const likeButtons = document.querySelectorAll('.bx-heart');
    likeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const movieId = parseInt(btn.getAttribute('data-pos'), 10);
        addLike(movieId, btn);
        console.log(btn);
        btn.disabled = true;
      }, { once: true });
    });

   const addLike = async (itemId, likeButton) => {
        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g47Ybpe3Iv9MLdD87d0m/likes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ item_id: itemId }),
        }).then((response) => response.text(response)).then((json) => json);
        await this.getLikes();
        const span = document.getElementById('game-id');
        const index = likedList.findIndex((like) => like.item_id === itemId);
        const msgLikes = index >= 0 ? likedList[index].likes : 0;
        likeButton.nextElementSibling.innerHTML = msgLikes;
      }
}


export default cards;
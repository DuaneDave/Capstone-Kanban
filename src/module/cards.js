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
              <i class="bx bx-heart" data-pos=${game.id}></i>
              <span class="game-id">${msgLikes}</span>
            </div>
             </div>
             <button class="comment" id="comment" data-pos=${game.id}>Comments</button>
            </div>`
        cards.innerHTML += innerHtml;
    });

    const likeButtons = document.querySelectorAll('.bx-heart');
    likeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const gameId = parseInt(btn.getAttribute('data-pos'), 10);
        addLike(gameId, btn);
        btn.disabled = true;
      }, { once: true });
    });

    const btnComment=document.querySelectorAll('.comment');
    btnComment.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            const gameId = parseInt(btn.getAttribute('data-pos'), 10);
            setModalData(gameId);
            document.getElementById('modal').style.display='unset';
            document.querySelector('.modal-content').classList.add('active');
        });
    })

    document.getElementById('bx').addEventListener('click',()=>{
        document.getElementById('modal').style.display='none';
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

      const setModalData= async (id)=>{
        const response = await fetch('https://api.tvmaze.com/shows/'+id);
        const getJsonObj = await response.json();
        document.getElementById('modal-img').setAttribute('src',getJsonObj.image.medium);
        document.getElementById('modal-heading').innerText = getJsonObj.name;
        document.getElementById('movie-desc').innerHTML = getJsonObj.summary;
        document.getElementById('comment-date').innerText = getJsonObj.premiered;
        document.getElementById('comment-msg').innerText = getJsonObj.premiered;
        console.log(getJsonObj);
      }
}

export default cards;
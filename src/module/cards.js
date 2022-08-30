const cards = (games) => {
    const cards = document.querySelector('.cards');
    games.forEach((game) => {
        let innerHtml = `<div class="card" id="card">
          <img src="${game.image.original}" class="card-img"/>
          <div class="social flex">
            <span class="details">${game.name}</span>
            <div class="like flex">
              <i class="bx bx-heart"></i>
              <span>${game.id}</span>
            </div>
             </div>
             <button>Comments</button>
            </div>`
        cards.innerHTML += innerHtml;
    });
    
}

export default cards;
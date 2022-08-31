const modal = (data, index) => {
  const modalContainer = document.querySelector('.modal-content');
  modalContainer.innerHTML = ` 
    <div class="modal-details flex">
      <img src="${data[index].image.original}" class="modal-img" />
      <h2 class="heading">${data[index].name}</h2>
      <p class="movie-desc">
        ${data[index].summary}
      </p>
    </div>
  
    <div class="comments">
      <div class="comment-details">
        <h2 class="heading">Comments <span></span></h2>
  
        <div class="comment flex">
          <p class="comment-date">Jan 2022 lie</p>
        <p class="comment-msg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quasi.</p>
        </div>
  
      </div>
    </div>
  
    <div class="comment-form">
      <form class="">
        <input type="text" placeholder="Enter your name" />
        <textarea placeholder="Enter your comment here"></textarea>
        <button type="submit" class="btn flex">Submit</button>
      </form>
      <i class='bx bx-x'></i>
    </div>`;
};

export default modal;

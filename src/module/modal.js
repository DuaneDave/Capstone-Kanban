/* eslint-disable no-return-assign */

import { postComment, getComments } from './requestComment.js';

const modal = async (data, index) => {
  let commentData = await getComments(index);
  if (commentData.length === undefined) {
    commentData = [];
  }
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
        <h2 class="heading">Comments <span>(${commentData.length})</span></h2>`;
  commentData.map((comment) => modalContainer.innerHTML += `<div class="comment flex">
          <p class="comment-date">${comment.creation_date} ${comment.username} :</p>
          <p class="comment-msg">${comment.comment}</p>
          </div>
          `);
  modalContainer.innerHTML += `</div>
    </div>
    <div class="comment-form">
      <form class="">
      <h2 class="heading">Add a comment</h2>
        <input type="text" placeholder="Enter your name" required />
        <textarea placeholder="Enter your comment here" required></textarea>
        <button type="submit" class="btn flex">Submit</button>
      </form>
      <i class='bx bx-x'></i>
    </div>`;

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input').value;
    const commentMsg = document.querySelector('textarea').value;
    const commentData = {
      item_id: index.toString(),
      username: name,
      comment: commentMsg,
    };
    form.reset();
    postComment(commentData);
    getComments(index);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  });
};
export default modal;
import './style.css';
import { getData } from './module/getData.js';

getData();

const hamburger = document.querySelector('.harmburger');
const nav = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('slide');
  nav.classList.toggle('slide');
});

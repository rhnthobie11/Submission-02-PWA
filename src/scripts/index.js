import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
// import data from '../DATA.json';
import App from './views/app';

// untuk inisiasi drawer
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  // menunjuk kepada this._contain sebagai wadah
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// const postContainer = document.querySelector('.posts');

// const CardComponent = (restaurant) => `<article class="post-item">
// <img class="post-item__thumbnail"
//      src="${restaurant.pictureId}"
//      alt="${restaurant.name}">
// <div class="post-item__content">
// eslint-disable-next-line max-len
// <p class="post-item__rate">Rating <span class="Rate">${restaurant.rating}</span><span href="#" class="post-item__location">${restaurant.city}</span>
//   </p>
//   <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
//   <p class="post-item__description">${restaurant.description}</p>
// </div>
// </article>`;

// const renderAllCards = (restaurants) => {
//   restaurants.forEach((restaurant) => {
//     postContainer.innerHTML += CardComponent(restaurant);
//   });
// };

// renderAllCards(data.restaurants);

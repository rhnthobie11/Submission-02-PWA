import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto, foods, beverages, review) => `
<h2 class="restaurant__title">${resto.name}</h2>
<img class="restaurant-poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
<div class="restaurant-info">
<h3>Information</h3>
  <h4>Kota</h4>
  <p>${resto.city}</p>
  <h4>Alamat</h4>
  <p>${resto.address}</p>
  <h4>Rating</h4>
  <p>${resto.rating}</p>
</div>
<div class="restaurant__overview">
  <h3>Overview</h3>
  <p>${resto.description}</p>
</div>
<div class="menus">
  <h3>Makanan</h3>
  <p>${foods}</p>
  <br>
  <h3>Minuman</h3>
  <p>${beverages}</p>
  <br>
  <h3>Review Pelanggan</h3>
  <p>${review}</p>
</div>
`;

const createRestoItemTemplate = (resto) => `
<article class="post-item">
<img class="post-item__thumbnail"
     src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
     alt="${resto.name}">
<div class="post-item__content">
<p class="post-item__rate">Rating <span class="Rate">${resto.rating}</span> In <span class="post-item__location">${resto.city}</span>
  </p>
  <h1 class="post-item__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
  <p class="post-item__description">${resto.description}</p>
</div>
</article>
`;

export { createRestoDetailTemplate, createRestoItemTemplate };

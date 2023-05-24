import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../template/template-creator';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurants(url.id);
    // berperan untuk menampilkan data resto
    const restoDetail = document.querySelector('#resto');
    restoDetail.innerHTML = createRestoDetailTemplate(resto);
    console.log(resto);
  },
};

export default Detail;

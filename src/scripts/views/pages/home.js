import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
      <h1 class="hero__title">The Place of A Peace</h1>
      <p class="hero__tagline">Come n enjoy ur time with the best food in town! <br><span>won't disappoint you!</span></p>
      </div>
    </div>

    <section id="content">
      <div class="newest">
       <h1 class="newest__label">Explore Eat & Go</h1>
        <div class="posts">

        </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restos = await RestaurantSource.restaurants();
    // berperan untuk menampilkan data resto
    const restoCard = document.querySelector('.posts');
    restos.forEach((resto) => {
      restoCard.innerHTML += createRestoItemTemplate(resto);
    });
    console.log(restos);
  },
};

export default Home;

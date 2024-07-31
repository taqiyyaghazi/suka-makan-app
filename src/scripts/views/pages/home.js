import RestaurantsApiSource from '../../data/restaurants-api-source';
import SkipContentInitiator from '../../utils/skip-content-initiator';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="hero">
            <h1>Discover Your Next Favorite Dish</h1>
            <p>
                Explore the best restaurants and hidden gems in your city.
                SukaMakan.com makes dining an adventure.
            </p>
            <div class="hero-gradient"></div>
            <img src="images/heros/hero-image_1.jpg" alt="hero image" />
        </section>
        <section id="explore">
            <h2>Explore Restaurants</h2>
            <div id="restaurants" class="restaurants"></div>
        </section>
        `;
  },
  async afterRender() {
    const restaurants = await RestaurantsApiSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });

    SkipContentInitiator.init({
      skipContentContainer: document.getElementById('skip-content-container'),
      target: '#explore',
    });
  },
};

export default Home;

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createEmptyStateFavoriteRestaurantTemplate,
  createFavoriteRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="favorite-restaurant">
            <h1>Favorite Restaurant</h1>
            <div id="favorite-restaurant-container" class="favorite-restaurant-container"></div>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById(
      'favorite-restaurant-container',
    );
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML
          += createFavoriteRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = createEmptyStateFavoriteRestaurantTemplate();
    }
  },
};

export default Favorite;

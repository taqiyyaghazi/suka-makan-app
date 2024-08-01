import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };

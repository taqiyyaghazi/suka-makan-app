const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked Restaurants', ({ I }) => {
  I.see(
    'Belum ada restaurant favorite yang ditambahkan',
    '.empty-restaurant-state'
  );
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'Belum ada restaurant favorite yang ditambahkan',
    '.empty-restaurant-state'
  );
  I.amOnPage('/');

  I.seeElement('.restaurant-title a');
  const firstRestaurant = locate('.restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

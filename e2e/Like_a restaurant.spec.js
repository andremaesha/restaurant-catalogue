const assert = require('assert');

Feature('Like a restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Like one restaurant', async ({ I }) => {
  I.seeElement('#content');
  I.see('Tidak ada favorite resto', '.content__empty-message');

  I.amOnPage('/');

  I.seeElement('#item-title a');

  const firstRestaurant = locate('#item-title a').at(2);
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.resto-item');
  const favoriteRestaurantTitle = await I.grabTextFrom('#item-title');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

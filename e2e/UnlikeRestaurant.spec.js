Feature('Unlike Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Like 3 restaurants and unlike one restaurant', async ({ I }) => {
  // Like 3 resto
  I.see('Tidak ada favorite resto', '.content__empty-message');

  I.amOnPage('/');
  I.seeElement('#item-title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('#item-title a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');

    const itemTitles = await I.grabTextFromAll('#item-title a');

    titles.push(itemTitles);

    I.amOnPage('/');
  }

  // delete 1 restaurant
  I.amOnPage('#/favorite');
  I.seeElement('.resto-item');

  const selectFirstRestaurant = locate('#item-title a').at(1);

  I.click(selectFirstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
});

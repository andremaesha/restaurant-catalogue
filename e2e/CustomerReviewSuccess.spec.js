Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Write customer review on First Restaurant', ({ I }) => {
  I.seeElement('#item-title a');
  I.click(locate('#item-title a').first());

  I.seeElement('#name-form');
  I.fillField('#name-form', 'dicoding');

  I.seeElement('#review-form');
  I.fillField('#review-form', 'hahahahaha');

  I.seeElement('#submit');
  I.click('#submit');

  I.waitForElement('#alert', 5);
});

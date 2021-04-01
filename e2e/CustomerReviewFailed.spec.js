Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Write customer review empty name and review to show failed notification', ({ I }) => {
  I.seeElement('#item-title a');
  I.click(locate('#item-title a').first());

  I.seeElement('#name-form');
  I.fillField('#name-form', '');

  I.seeElement('#review-form');
  I.fillField('#review-form', '');

  I.seeElement('#submit');
  I.click('#submit');

  I.waitForElement('#alert', 5);
});

import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import { FavoriteRestaurantIdb } from '../src/scripts/data/FavoriteRestaurant-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unlike a restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putFavorite({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteFavorite(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="unlike this"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllFavorite()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.deleteFavorite(1);

    document.querySelector('[aria-label="unlike this"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllFavorite()).toEqual([]);
  });
});

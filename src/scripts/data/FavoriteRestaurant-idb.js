import DB from './IDB/IDB';
import CONFIG from '../globals/config';

const { OBJECT_STORE_NAME } = CONFIG;

const dbPromise = DB(OBJECT_STORE_NAME, 'id');

const FavoriteRestaurantIdb = {
  async getFavorite(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllFavorite() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putFavorite(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteFavorite(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export { FavoriteRestaurantIdb, dbPromise };

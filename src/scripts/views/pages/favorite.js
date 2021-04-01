import { FavoriteRestaurantIdb } from '../../data/FavoriteRestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
            <div id="content" class="content">
                <h1 id="title_favorite" class="content__heading">Favorite Restaurant</h1>
                <div id="items" class="items"></div>
            </div>
        `;
  },

  async afterRender() {
    const FavResto = await FavoriteRestaurantIdb.getAllFavorite();
    const RestoContainer = document.querySelector('#items');
    const content = document.getElementById('content');

    if (!FavResto.length) {
      document.getElementById('title_favorite').style.visibility = 'hidden';
      content.innerHTML = '<h1 class="content__empty-message">Tidak ada favorite resto</h1>';
    } else {
      FavResto.forEach((resto) => {
        RestoContainer.innerHTML += createRestaurantItemTemplate(resto);
      });
    }
  },
};

export default Favorite;

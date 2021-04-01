import { FavoriteRestaurantIdb } from '../data/FavoriteRestaurant-idb';
import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderUnlike();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestaurantIdb.getFavorite(id);

    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const LikeButton = document.querySelector('#likeButton');
    LikeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putFavorite(this._resto);
      this._renderButton();
    });
  },

  _renderUnlike() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const UnlikeButton = document.querySelector('#likeButton');
    UnlikeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteFavorite(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;

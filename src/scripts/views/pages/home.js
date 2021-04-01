import RestaurantSource from '../../data/Restaurant-source';
import { createRestaurantItemTemplate, createRestaurantSkeletonTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
            <div class="content">
                <div id="items" class="items">
                  ${createRestaurantSkeletonTemplate(20)}
                </div>
            </div>
        `;
  },

  async afterRender() {
    const Restaurant = await RestaurantSource.ListAllRestaurant();
    const itemsContainer = document.querySelector('#items');
    itemsContainer.innerHTML = '';
    Restaurant.forEach((item) => {
      itemsContainer.innerHTML += createRestaurantItemTemplate(item);
    });
  },
};

export default Home;

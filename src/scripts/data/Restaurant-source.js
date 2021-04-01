import API_CONFIG from '../globals/api-endpoint';

class RestaurantSource {
  static async ListAllRestaurant() {
    const response = await fetch(API_CONFIG.GET_LIST_OF_RESTAURANT, {
      method: 'GET',
    });

    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async customerReviews({ id, name, review }) {
    const response = await fetch(API_CONFIG.CUSTOMER_REVIEWS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify({
        id: `${id}`,
        name: `${name}`,
        review: `${review}`,
      }),
    });

    const responseJson = response.json();
    return responseJson;
  }

  static async DetailRestaurant(id) {
    const response = await fetch(API_CONFIG.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;

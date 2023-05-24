import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // static async detailRestaurants(id) {
  //   const response = await fetch(API_ENDPOINT.DETAIL(id));
  //   return response.json();
  // }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;

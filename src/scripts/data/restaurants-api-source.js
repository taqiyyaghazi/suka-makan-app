import API_ENDPOINT from '../global/api-endpoint';

class RestaurantsApiSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurants;
  }

  static async detailRestaurant() {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantsApiSource;
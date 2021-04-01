import CONFIG from './config';

const API_CONFIG = {
  GET_LIST_OF_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  CUSTOMER_REVIEWS: `${CONFIG.BASE_URL}/review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_CONFIG;

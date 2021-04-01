import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/Restaurant-source';
import {
  createRestaurantDetailTemplate,
  createFormCustomerReviewTemplate,
  alertNotificationAddCustomerReviewSUCCESS,
  alertNotificationAddCustomerReviewFailed,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import DomElement from '../../DOM/form-input-customer-review';

const Detail = {
  async render() {
    return `
        <div id="item" class="item"><div class="loader"></div></div>
        <div id="template-alert-customer-review"></div>
        <div id="customerReviewTemplateContainer">${createFormCustomerReviewTemplate()}</div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const Data = await RestaurantSource.DetailRestaurant(url.id);
    const RestaurantContainer = document.querySelector('#item');
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(Data);

    const {
      id, name, pictureId, rating, city, description, categorie,
    } = Data.restaurant;

    // customers review
    const DOM = DomElement();
    const { TemplateAlertCustomerReview } = DOM;

    DOM.Submit.addEventListener('click', () => {
      if (DOM.FormInputName.value !== '' || DOM.FormInputReview.value !== '') {
        RestaurantSource.customerReviews({
          id: id,
          name: DOM.FormInputName.value,
          review: DOM.FormInputReview.value,
        });

        TemplateAlertCustomerReview.innerHTML = alertNotificationAddCustomerReviewSUCCESS();
      } else {
        TemplateAlertCustomerReview.innerHTML = alertNotificationAddCustomerReviewFailed();
      }
    });

    // Like Button.
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id,
        name,
        pictureId,
        rating,
        city,
        description,
        categorie,
      },
    });
  },
};

export default Detail;

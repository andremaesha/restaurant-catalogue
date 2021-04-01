import CONFIG from '../../globals/config';

const { BASE_IMAGE_URL } = CONFIG;

const createRestaurantSkeletonTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
        <div class="resto-item">
            <div class="resto-item__header">
                <div class="container">
                    <img 
                        class="resto-item__header__poster lazyload"
                        data-src="./responsive/Skeleton-large.jpg"
                        srcset="./responsive/Skeleton-small.jpg 480w, ./responsive/Skeleton-large.jpg 800w"
                        sizes="(max-width: 600px) 480px, 800px"
                        alt="skeleton">
                </div>

            </div>
            <div class="resto-item__content">
                <h3 class="skeleton">Lorem ipsum dolor sit.</h3>
                <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
            </div>
        </div>
        `;
  }
  return template;
};

const createRestaurantItemTemplate = (data) => {
  const {
    name, pictureId, rating, id, description, city,
  } = data;

  return `
    <div class="resto-item">
        <div class="resto-item__header">
            <a href="${`/#/detail/${id}`}">
                <div class="container">
                    <img class="resto-item__header__poster lazyload" alt="${name}"
                        data-src="${BASE_IMAGE_URL + pictureId}"
                        crossorigin="anonymous">
                    <h2 class="topleft">${city}</h2>
                </div>
            </a>

            <div class="resto-item__header__rating">
                <p>⭐️<span class="resto-item__header__rating__score">${rating}</span></p>
            </div>
        </div>
        <div class="resto-item__content">
            <h3 id="item-title"><a href="${`/#/detail/${id}`}">${name}</a></h3>
            <p>${description}</p>
        </div>
    </div>
    `;
};

const createRestaurantDetailTemplate = (data) => {
  const {
    name, pictureId, rating, city, description, address, categories, menus, customerReviews,
  } = data.restaurant;
  console.log(customerReviews);
  const { foods, drinks } = menus;

  return `
    <h2 class="resto-title">${name}</h2>
    <img class="resto__poster" src="${BASE_IMAGE_URL + pictureId}" alt="${name}" crossorigin="anonymous"/>
    <div class="resto-info">
        <h3>More Info</h3>
            <h4>Nama resto</h4>
            <p>${name}</p>
            <br>
            <h4>Address Restaurant</h4>
            <p>${address}</p>
            <br>
            <h4>Rating Resto</h4>
            <p>${rating}</p>
            <br>
            <h4>City</h4>
            <p>${city}</p>
    </div> <br>
    <div class="resto__description">
        <h3>Categories</h3>
        <p>${categories.map((categorie) => categorie.name).join('<br>')}</p>
    </div>
    <br>
    <div class="resto__description">
        <h3 class="menu__header">Menu</h3>
            <h4 class="food__title">foods</h4>
            <p class="food">${foods.map((food) => food.name).join('<br>')}</p>
            <br>
            <h4 class="drink__title">Drinks</h4>
            <p class="drink">${drinks.map((drink) => drink.name).join('<br>')}</p>
    </div>
    <div>
        <h3>Customer Reviews</h3>
            <h4>Name</h4>
            <p>${customerReviews[0].name}</p>
            <h4>Review</h4>
            <p>${customerReviews[0].review}</p>
            <h4>Date</h4>
            <p>${customerReviews[0].date}</p>
    </div>
    <div class="resto__description">
        <h3>description resto</h3>
        <p>${description}</p>
    </div>
    `;
};

const createLikeButtonTemplate = () => `
    <button aria-label="like this" id="likeButton" class="like">
        <i class="material-icons" aria-hidden="true">favorite_border</i>
    </button>
`;

const createUnlikeButtonTemplate = () => `
    <button aria-label="unlike this" id="likeButton" class="like">
        <i class="material-icons" aria-hidden="true">favorite</i>
    </button>
`;

const createFormCustomerReviewTemplate = () => `
    <div class="container-form">
        <div class="row">
            <div class="col-25">
                <label for="name">Your Name</label>
            </div>
            <div class="col-75">
                <input type="text" id="name-form" name="name" placeholder="Your Name...">
            </div>
        </div>

        <div class="row">
            <div class="col-25">
                <label for="review">Review</label>
            </div>
            <div class="col-75">
                <textarea name="review" id="review-form" placeholder="Write your review here" style="height:200px"></textarea>
            </div>
        </div>

        <div class="row">
            <button class="submit" id="submit">Submit</button>
        </div>
    </div>
`;

const alertNotificationAddCustomerReviewSUCCESS = () => `
    <div id="alert" class="alert" >
        <strong class="message-alert">Success</strong>
        <span id="closebtn" class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    </div>
`;

const alertNotificationAddCustomerReviewFailed = () => `
    <div id="alert" class="alert" style="background-color: #d3001f;">
        <strong class="message-alert">Failed</strong>
        <span>Please insert Your name and Review</span>
        <span id="closebtn" class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createRestaurantSkeletonTemplate,
  createFormCustomerReviewTemplate,
  alertNotificationAddCustomerReviewSUCCESS,
  alertNotificationAddCustomerReviewFailed,
};

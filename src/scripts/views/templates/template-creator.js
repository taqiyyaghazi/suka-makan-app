import CONFIG from '../../global/config';

export const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-card">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Foto ${restaurant.name}"/>
        <header>
            <h3 class="restaurant-title"><a style="padding: 12px 0;" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <div>
                <small class="tag" style="margin-right: 4px;">
                    <svg fill="#333" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 395.71 395.71" xml:space="preserve" stroke="#333"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>
                    ${restaurant.city}
                </small>
                <small class="tag">
                    <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#333"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#333"></path> </g></svg>
                    ${restaurant.rating}
                </small>
            </div>
        </header>
        <div class="restaurant-card-content">
            <p>${restaurant.description}</p>
        </div>
    </article>`;

export const createFavoriteRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-card">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Foto ${restaurant.name}"/>
        <header style="margin-bottom: 16px;">
            <h3 class="restaurant-title"><a style="padding: 12px 0;" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <small class="tag" style="margin-right: 4px;">
                <svg fill="#333" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 395.71 395.71" xml:space="preserve" stroke="#333"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>
                ${restaurant.city}
            </small>
        </header>
    </article>`;

export const createRestaurantDetailTemplate = (restaurant) => `
    <header>
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Foto ${
  restaurant.name
}"/>
        <h1>${restaurant.name}</h1>
    </header>
    <section>
        <small class="tag" style="margin-right: 4px;">
            <svg fill="#333" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 395.71 395.71" xml:space="preserve" stroke="#333"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>
            ${restaurant.city}
        </small>
        <small class="tag">
            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#333"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#333"></path> </g></svg>
            ${restaurant.rating}
        </small>
    </section>
    <section>
        <p>Alamat: ${restaurant.address}</p>
    </section>
    <section>
        <p>${restaurant.description}</p>
        <div class="restaurant-menus">
            <div>
                <h3>Makanan</h3>
                <ul>
                    ${restaurant.menus.foods
    .map((food) => `<li>${food.name}</li>`)
    .join('\n')}
                </ul>
            </div>
            <div>
                <h3>Minumam</h3>
                <ul>
                    ${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join('\n')}
                </ul>
            </div>
        </div>
    </section>
    <section>
        <h3>Kategori</h3>
        ${restaurant.categories
    .map((category) => `<span class="tag">${category.name}</span>`)
    .join('\n')}
    </section>
    <section>
        <h2>Ulasan</h2>
        <div>
            ${restaurant.customerReviews
    .map(
      (review) => `
                <div class="review">
                    <h3>${review.name}</h3>
                    <p class="review-date">${review.date}</p>
                    <p class="review-text">${review.review}</p>
                </div>
                `,
    )
    .join('\n')}
        </div>
    </section>
    `;

export const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

export const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export const createSkipContentTemplate = (target) => `<a href="${target}" class="skip-link">Menuju ke konten</a>`;

export const createEmptyStateFavoriteRestaurantTemplate = () => '<h3 style="text-align: center;" class="empty-restaurant-state">Belum ada restaurant favorite yang ditambahkan</h3>';

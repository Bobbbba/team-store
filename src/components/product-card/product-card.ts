import { ProductItem } from '../../types/product';
import './product-card.css';

function renderProductCard({ title, image, available, price, href, isNew }: ProductItem) {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');

    if (isNew) {
        const newBadge = document.createElement('span');
        newBadge.classList.add('product-card__badge');
        newBadge.textContent = 'NEW';
        productCard.append(newBadge);
    }

    const productImage = document.createElement('img');
    productImage.classList.add('product-card__image');
    productImage.src = image;
    productImage.alt = title;

    const productTitle = document.createElement('h3');
    productTitle.classList.add('product-card__title');
    productTitle.textContent = title;

    const productAvailability = document.createElement('p');
    productAvailability.classList.add(
        'product-card__availability',
        available ? 'product-card__availability--available' : 'product-card__availability--unavailable'
    );
    productAvailability.textContent = available ? 'В наличии' : 'Нет в наличии';

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-card__price');
    productPrice.textContent = `${price} BYN`;

    const detailsLink = document.createElement('a');
    detailsLink.classList.add('product-card__link');
    detailsLink.href = href;
    detailsLink.textContent = 'Подробнее';

    productCard.append(productImage, productTitle, productAvailability, productPrice, detailsLink);

    return productCard;
}

export { renderProductCard };

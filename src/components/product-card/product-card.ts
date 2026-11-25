import { ProductBase } from '../../types/product';
import './product-card.css';

function renderProductCard({ id, title, image, available, price, href, isNew }: ProductBase) {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    productCard.dataset.id = String(id);

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

    if (!available) {
        productPrice.classList.add('product-card__price--unavailable');
    }

    productPrice.textContent = `${price} BYN`;

    const buttons = document.createElement('div');
    buttons.classList.add('product-card__buttons');

    const detailsButton = document.createElement('button');
    detailsButton.classList.add('product-card__link');
    detailsButton.type = 'button';
    detailsButton.textContent = 'Подробнее';
    detailsButton.dataset.id = String(id);
    detailsButton.dataset.href = href;

    const cartButton = document.createElement('button');
    cartButton.classList.add('product-card__cart');
    cartButton.type = 'button';
    cartButton.textContent = '🛒';
    cartButton.dataset.id = String(id);
    cartButton.setAttribute('aria-label', 'Добавить в корзину');

    buttons.append(detailsButton, cartButton);

    productCard.append(productImage, productTitle, productAvailability, productPrice, buttons);

    return productCard;
}

export { renderProductCard };

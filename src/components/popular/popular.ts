import { products } from '../../types/product';
import { renderProductCard } from '../product-card/product-card';
import './popular.css';

function renderPopular() {
    const popularSection = document.createElement('section');
    popularSection.classList.add('popular');

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('popular__header');

    const title = document.createElement('h2');
    title.classList.add('popular__title');
    title.textContent = 'Популярное';

    const allProductsButton = document.createElement('button');
    allProductsButton.classList.add('popular__button');
    allProductsButton.type = 'button';
    allProductsButton.textContent = 'Все товары →';

    titleBlock.append(title, allProductsButton);

    const productsList = document.createElement('div');
    productsList.classList.add('popular__list');

    products
        .filter((product) => product.isPopular)
        .forEach((product) => {
            productsList.append(renderProductCard(product));
        });

    popularSection.append(titleBlock, productsList);

    return popularSection;
}

export { renderPopular };

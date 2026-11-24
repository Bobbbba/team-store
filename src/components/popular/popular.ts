import { popularProducts } from '../../types/product';
import { renderProductCard } from '../product-card/product-card';
import './popular.css';

function renderPopular() {
    const popularSection = document.createElement('section');
    popularSection.classList.add('popular');

    const title = document.createElement('h2');
    title.classList.add('popular__title');
    title.textContent = 'Популярное';

    const productsList = document.createElement('div');
    productsList.classList.add('popular__list');

    popularProducts.forEach((product) => {
        productsList.append(renderProductCard(product));
    });

    popularSection.append(title, productsList);

    return popularSection;
}

export { renderPopular };

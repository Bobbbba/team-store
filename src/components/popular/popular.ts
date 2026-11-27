import { products } from '../../types/product';
import { renderCatalog } from '../catalog/catalog';
import { renderProductsList } from '../product-list/product-list';
import './popular.css';

function renderPopular() {
    const popularSection = document.createElement('section');
    popularSection.classList.add('popular');

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('popular__header');

    const title = document.createElement('h2');
    title.classList.add('popular__title');
    title.textContent = 'Популярное';

    const allProductsButton = document.createElement('a');
    allProductsButton.classList.add('popular__button');
    allProductsButton.type = 'button';
    allProductsButton.textContent = 'Все товары →';
    allProductsButton.href = 'all';

    titleBlock.append(title, allProductsButton);

    const productsList = renderProductsList(products, { isPopular: true });
    productsList.classList.add('popular__list');

    popularSection.append(titleBlock, productsList);

    allProductsButton.addEventListener('click', (event) => {
        event.preventDefault();
        renderCatalog();
    });

    return popularSection;
}

export { renderPopular };

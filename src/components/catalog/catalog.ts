import { products } from '../../types/product';
import { renderCatalogFilters } from '../catalog-filters/catalog-filters';
import { generationFooter } from '../footer/footer';
import { generationHeader } from '../header/header';
import { renderProductsList } from '../product-list/product-list';
import { renderSlider } from '../slider/slider';
import './catalog.css';

function renderCatalog() {
    const app = document.querySelector<HTMLDivElement>('#app');

    if (!app) {
        throw new Error('App element not found');
    }

    app.replaceChildren();

    const catalog = document.createElement('section');
    catalog.classList.add('catalog');

    const productsContainer = renderProductsList(products);
    productsContainer.classList.add('catalog__products');

    catalog.append(renderCatalogFilters(), productsContainer);

    app.append(generationHeader(), renderSlider(), catalog, generationFooter());
}

export { renderCatalog };

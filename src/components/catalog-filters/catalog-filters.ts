import './catalog-filters.css';

function renderCatalogFilters() {
    const catalogFilters = document.createElement('section');
    catalogFilters.classList.add('catalog__filters');

    return catalogFilters;
}

export { renderCatalogFilters };

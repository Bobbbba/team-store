import type { ProductFilters, ProductBase } from '../../types/product';
import { renderProductCard } from '../product-card/product-card';

function renderProductsList(products: ProductBase[], filters: ProductFilters = {}) {
    const productsList = document.createElement('div');

    const filteredProducts = products.filter((product) =>
        Object.entries(filters).every(([key, value]) => product[key as keyof ProductBase] === value)
    );

    filteredProducts.forEach((product) => {
        productsList.append(renderProductCard(product));
    });

    return productsList;
}

export { renderProductsList };

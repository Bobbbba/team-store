import { navigationItems } from '../../constants/navigation';
import './categories.css';

function renderCategories() {
    const categoriesSection = document.createElement('section');
    categoriesSection.classList.add('categories');

    navigationItems.forEach(({ title, href, image }) => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('categories__item');
        categoryItem.style.backgroundImage = `url("${image}")`;

        const categoryLink = document.createElement('a');
        categoryLink.classList.add('categories__link');
        categoryLink.href = href;
        categoryLink.textContent = title;

        categoryItem.append(categoryLink);
        categoriesSection.append(categoryItem);
    });

    return categoriesSection;
}

export { renderCategories };

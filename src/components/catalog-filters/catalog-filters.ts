import type { ProductGender, ProductCategory } from '../../types/product';
import './catalog-filters.css';

const categories: Record<ProductGender, { title: string; value: ProductCategory }[]> = {
    women: [
        { title: 'Нижнее бельё', value: 'underwear' },
        { title: 'Бюстье', value: 'bustiers' },
        { title: 'Боди', value: 'bodysuits' },
        { title: 'Домашняя одежда', value: 'sleepwear' },
        { title: 'Спортивная одежда', value: 'sportswear' },
        { title: 'Верхняя одежда', value: 'outerwear' },
        { title: 'Топы', value: 'lingerie-tops' },
    ],
    men: [
        { title: 'Нижнее бельё', value: 'underwear' },
        { title: 'Майки', value: 'lingerie-tops' },
        { title: 'Домашняя одежда', value: 'sleepwear' },
        { title: 'Спортивная одежда', value: 'sportswear' },
        { title: 'Верхняя одежда', value: 'outerwear' },
    ],
};

const genderItems: { gender: ProductGender; title: string }[] = [
    { gender: 'women', title: 'Женщинам' },
    { gender: 'men', title: 'Мужчинам' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const colors = [
    { title: 'Белый', value: 'white', color: '#ffffff' },
    { title: 'Чёрный', value: 'black', color: '#000000' },
    { title: 'Бежевый', value: 'beige', color: '#dfc5a5' },
    { title: 'Серый', value: 'gray', color: '#999999' },
    { title: 'Красный', value: 'red', color: '#a52a2a' },
    { title: 'Розовый', value: 'pink', color: '#e8a0b5' },
];

function createFilterSection(title: string, className: string) {
    const section = document.createElement('div');
    section.classList.add('catalog-filters__section');

    const header = document.createElement('button');
    header.classList.add('catalog-filters__header');
    header.type = 'button';
    header.textContent = title;
    header.setAttribute('aria-expanded', 'true');

    const arrow = document.createElement('span');
    arrow.classList.add('catalog-filters__arrow');
    header.append(arrow);

    const content = document.createElement('div');
    content.classList.add('catalog-filters__options', className);

    header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';

        header.setAttribute('aria-expanded', String(!isExpanded));
        content.hidden = isExpanded;
    });

    section.append(header, content);

    return { section, content };
}

function createCheckbox(title: string, value: string) {
    const label = document.createElement('label');
    label.classList.add('catalog-filters__option');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = value;

    const text = document.createElement('span');
    text.textContent = title;

    label.append(checkbox, text);

    return label;
}

function renderCatalogFilters(onGenderChange: (gender: ProductGender | null) => void) {
    let selectedGender: ProductGender | null = null;

    const catalogFilters = document.createElement('aside');
    catalogFilters.classList.add('catalog__filters');

    const title = document.createElement('h2');
    title.classList.add('catalog-filters__title');
    title.textContent = 'Фильтры';

    const genderSection = document.createElement('div');
    genderSection.classList.add('catalog-filters__gender');

    const categorySection = createFilterSection('Категории', 'catalog-filters__categories');

    const renderCategories = () => {
        categorySection.content.replaceChildren();

        const currentCategories = selectedGender
            ? categories[selectedGender]
            : [...categories.women, ...categories.men];

        currentCategories.forEach(({ title, value }) => {
            categorySection.content.append(createCheckbox(title, value));
        });
    };

    genderItems.forEach(({ gender, title }) => {
        const button = document.createElement('button');
        button.classList.add('catalog-filters__gender-button');
        button.type = 'button';
        button.textContent = title;

        button.addEventListener('click', () => {
            selectedGender = selectedGender === gender ? null : gender;

            genderSection.querySelectorAll('button').forEach((item, index) => {
                item.classList.toggle(
                    'catalog-filters__gender-button--active',
                    genderItems[index]?.gender === selectedGender
                );
            });

            renderCategories();
            onGenderChange(selectedGender);
        });

        genderSection.append(button);
    });

    renderCategories();

    const sizeSection = createFilterSection('Размеры', 'catalog-filters__sizes');

    sizes.forEach((size) => {
        sizeSection.content.append(createCheckbox(size, size));
    });

    const colorSection = createFilterSection('Цвета', 'catalog-filters__colors');

    colors.forEach(({ title, value, color }) => {
        const label = createCheckbox(title, value);
        label.classList.add('catalog-filters__color');

        const colorPreview = document.createElement('span');
        colorPreview.classList.add('catalog-filters__color-preview');
        colorPreview.style.backgroundColor = color;

        label.prepend(colorPreview);
        colorSection.content.append(label);
    });

    catalogFilters.append(title, genderSection, categorySection.section, sizeSection.section, colorSection.section);

    return catalogFilters;
}

export { renderCatalogFilters };

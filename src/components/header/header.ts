import { navigationItems } from '../../constants/navigation';
import './header.css';

function generationHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('a');
    logo.classList.add('header__logo');
    logo.href = '/';
    logo.textContent = 'SERGE';

    const navigation = document.createElement('nav');
    navigation.classList.add('header__navigation');

    const navigationList = document.createElement('ul');
    navigationList.classList.add('header__list');

    navigationItems.forEach(({ title, href }) => {
        const item = document.createElement('li');
        item.classList.add('header__item');

        const link = document.createElement('a');
        link.classList.add('header__link');
        link.href = href;
        link.textContent = title;

        item.append(link);
        navigationList.append(item);
    });

    navigation.append(navigationList);

    const cart = document.createElement('a');
    cart.classList.add('header__cart');
    cart.href = '/cart';

    const cartIcon = document.createElement('span');
    cartIcon.classList.add('header__cart-icon');
    cartIcon.textContent = '🛒';

    cart.append(cartIcon);

    header.append(logo, navigation, cart);

    return header;
}

export { generationHeader };

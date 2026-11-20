import { phoneNumbers } from '../../constants/contacts';
import { navigationItems } from '../../constants/navigation';
import { socialItems } from '../../constants/social';
import './footer.css';

function generationFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const logoBlock = document.createElement('div');
    logoBlock.classList.add('footer__block', 'footer__logo-block');

    const logo = document.createElement('a');
    logo.classList.add('footer__logo');
    logo.href = '/';
    logo.textContent = 'SERGE';

    logoBlock.append(logo);

    const navigationBlock = document.createElement('div');
    navigationBlock.classList.add('footer__block');

    const navigationTitle = document.createElement('h3');
    navigationTitle.classList.add('footer__title');
    navigationTitle.textContent = 'Навигация';

    const navigationList = document.createElement('ul');
    navigationList.classList.add('footer__list');

    navigationItems.forEach(({ title, href }) => {
        const item = document.createElement('li');
        item.classList.add('footer__item');

        const link = document.createElement('a');
        link.classList.add('footer__link');
        link.href = href;
        link.textContent = title;

        item.append(link);
        navigationList.append(item);
    });

    navigationBlock.append(navigationTitle, navigationList);

    const socialBlock = document.createElement('div');
    socialBlock.classList.add('footer__block');

    const socialTitle = document.createElement('h3');
    socialTitle.classList.add('footer__title');
    socialTitle.textContent = 'Мы в соцсетях';

    const socialList = document.createElement('ul');
    socialList.classList.add('footer__list');

    socialItems.forEach(({ title, href }) => {
        const item = document.createElement('li');
        item.classList.add('footer__item');

        const link = document.createElement('a');
        link.classList.add('footer__link');
        link.href = href;
        link.target = '_blank';
        link.textContent = title;

        item.append(link);
        socialList.append(item);
    });

    socialBlock.append(socialTitle, socialList);

    const contactsBlock = document.createElement('div');
    contactsBlock.classList.add('footer__block');

    const contactsTitle = document.createElement('h3');
    contactsTitle.classList.add('footer__title');
    contactsTitle.textContent = 'Контакты';

    const phoneList = document.createElement('ul');
    phoneList.classList.add('footer__list');

    phoneNumbers.forEach(({ phone }) => {
        const item = document.createElement('li');
        item.classList.add('footer__item');
        item.textContent = phone;

        phoneList.append(item);
    });

    contactsBlock.append(contactsTitle, phoneList);

    footer.append(logoBlock, navigationBlock, socialBlock, contactsBlock);

    return footer;
}

export { generationFooter };

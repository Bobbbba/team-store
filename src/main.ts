import './styles/reset.css';
import './styles/global.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('App element not found');
}

const title = document.createElement('p');
title.textContent = 'Hello';
app.append(app);

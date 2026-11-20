import './styles/reset.css';
import './styles/global.css';
import './styles/colors.css';
import { generationHeader } from './components/header/header';
import { generationFooter } from './components/footer/footer';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('App element not found');
}

app.append(generationHeader(), generationFooter());

import './styles/reset.css';
import './styles/global.css';
import './styles/colors.css';
import { generationHeader } from './components/header/header';
import { generationFooter } from './components/footer/footer';
import { renderSlider } from './components/slider/slider';
import { renderCategories } from './components/categories/categories';
import { renderPopular } from './components/popular/popular';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('App element not found');
}

app.append(generationHeader(), renderSlider(), renderCategories(), renderPopular(), generationFooter());

import { slides } from '../../constants/slides';
import './slider.css';

function renderSlider() {
    const slider = document.createElement('section');
    slider.classList.add('slider');

    const image = document.createElement('img');
    image.classList.add('slider__image');

    const dots = document.createElement('div');
    dots.classList.add('slider__dots');

    let currentSlide = 0;

    const renderSlide = () => {
        const slide = slides[currentSlide];

        if (!slide) return;

        image.src = slide;
        image.alt = `Слайд ${currentSlide + 1}`;

        dots.replaceChildren();

        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('slider__dot');

            if (index === currentSlide) {
                dot.classList.add('slider__dot--active');
            }

            dot.setAttribute('aria-label', `Слайд ${index + 1}`);

            dot.addEventListener('click', () => {
                currentSlide = index;
                renderSlide();
            });

            dots.append(dot);
        });
    };

    slider.append(image, dots);
    renderSlide();
    return slider;
}

export { renderSlider };

import { getItems, getTotalCount, getTotalPrice, clear } from './cart';
import './cart.css';

export function renderCartItems() {
    const items = getItems();
    const container = document.getElementById('cart-items-container');
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total-price');

    if (!container || !countEl || !totalEl) return;

    countEl.textContent = `${getTotalCount()} товар(а)`;
    totalEl.textContent = `${getTotalPrice().toFixed(2)} BYN`;

    if (items.length === 0) {
        container.innerHTML = `<p class="cart-empty">Корзина пуста</p>`;
        return;
    }

    container.innerHTML = items
        .map(
            (item) => `
    <div class="cart-item" data-id="${item.id}" data-size="${item.selectedSize}" data-color="${item.selectedColor}">
      <img src="${item.image}" alt="${item.title}" class="cart-item__img">
      <div class="cart-item__info">
        <h3>${item.title}</h3>
        <p>${item.price} BYN</p>
      </div>
    </div>
  `
        )
        .join('');
}

export function initCartUI() {
    // 1. Создаем корзину в памяти
    const cartRoot = document.createElement('div');
    cartRoot.id = 'cart-root';

    cartRoot.innerHTML = `
    <div id="cart-overlay" class="cart-overlay hidden"></div>
    <aside id="cart-panel" class="cart-panel">
      <div class="cart-header">
        <h2>Ваша корзина <span id="cart-count" class="cart-header__count">0 товаров</span></h2>
        <div class="cart-header__actions">
          <button id="clear-cart-btn" class="cart-header__clear">Очистить корзину</button>
          <button id="close-cart-btn" class="cart-header__close">✕</button>
        </div>
      </div>
      <div id="cart-items-container" class="cart-items"></div>
      <div class="cart-footer">
        <div class="cart-footer__summary">
          <div class="cart-footer__row">
            <span>Всего:</span>
            <span id="cart-total-price" class="cart-footer__total">0 BYN</span>
          </div>
          <div class="cart-footer__row cart-footer__row--old">
            <span id="cart-old-price">0 BYN</span>
          </div>
          <div class="cart-footer__row cart-footer__row--savings">
            <span>Экономия: <span id="cart-savings">0 BYN</span></span>
          </div>
        </div>
        <div class="cart-footer__buttons">
          <button class="btn-checkout">Оформить заказ</button>
          <a href="#" class="cart-footer__link">Перейти в корзину</a>
        </div>
        <div class="cart-footer__payments">
          <span>VISA</span>
          <span>Mastercard</span>
        </div>
      </div>
    </aside>
  `;

    // 2. Находим элементы ВНУТРИ cartRoot (пока он еще не в документе)
    const panel = cartRoot.querySelector('#cart-panel') as HTMLElement;
    const overlay = cartRoot.querySelector('#cart-overlay') as HTMLElement;
    const closeBtn = cartRoot.querySelector('#close-cart-btn') as HTMLElement;
    const clearBtn = cartRoot.querySelector('#clear-cart-btn') as HTMLElement;

    // 3. Вешаем события
    const closeCart = () => {
        panel?.classList.remove('open');
        overlay?.classList.add('hidden');
    };

    closeBtn?.addEventListener('click', closeCart);
    overlay?.addEventListener('click', closeCart);

    clearBtn?.addEventListener('click', () => {
        if (confirm('Вы уверены, что хотите очистить корзину?')) {
            clear();
            renderCartItems();
        }
    });

    // 4. Делегирование для открытия корзины
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.closest('.header__cart')) {
            e.preventDefault();

            // ВАЖНО: используем querySelector от document здесь,
            // так как cartRoot уже будет вставлен в main.ts
            const currentPanel = document.getElementById('cart-panel');
            const currentOverlay = document.getElementById('cart-overlay');

            currentPanel?.classList.add('open');
            currentOverlay?.classList.remove('hidden');
            renderCartItems();
        }
    });

    // Первичный рендер
    renderCartItems();

    return cartRoot;
}

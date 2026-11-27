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
        <!-- ... остальные элементы: кнопки +, -, удаления ... -->
      </div>
    </div>
  `
        )
        .join('');
}

export function initCartUI() {
    let cartRoot = document.getElementById('cart-root');
    if (!cartRoot) {
        cartRoot = document.createElement('div');
        cartRoot.id = 'cart-root';
    }

    cartRoot.innerHTML = `
    <div id="cart-overlay" class="cart-overlay hidden"></div>
    <aside id="cart-panel" class="cart-panel">
      
      <!-- Шапка корзины -->
      <div class="cart-header">
        <h2>Ваша корзина <span id="cart-count" class="cart-header__count">0 товаров</span></h2>
        <div class="cart-header__actions">
          <button id="clear-cart-btn" class="cart-header__clear">Очистить корзину</button>
          <button id="close-cart-btn" class="cart-header__close">✕</button>
        </div>
      </div>

      <!-- Список товаров -->
      <div id="cart-items-container" class="cart-items"></div>

      <!-- Футер корзины -->
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
          <!-- Здесь можно вставить SVG или img с логотипами Visa/Mastercard -->
          <span>VISA</span>
          <span>Mastercard</span>
        </div>
      </div>

    </aside>
  `;

    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    const closeBtn = document.getElementById('close-cart-btn');
    const clearBtn = document.getElementById('clear-cart-btn');

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

    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        // Ищем ближайший элемент с классом header__cart (или header__cart-icon)
        const cartBtn = target.closest('.header__cart');

        if (cartBtn) {
            e.preventDefault(); // Отменяем переход на страницу /cart

            const panel = document.getElementById('cart-panel');
            const overlay = document.getElementById('cart-overlay');
            const closeBtn = document.getElementById('close-cart-btn');

            if (panel && overlay) {
                panel.classList.add('open');
                overlay.classList.remove('hidden');
                renderCartItems(); // Обновляем данные
            }
            const closeCart = () => {
                panel?.classList.remove('open');
                overlay?.classList.add('hidden');
            };

            // Вешаем события на крестик и фон
            if (closeBtn) {
                closeBtn.addEventListener('click', closeCart);
            } else {
                console.warn('Кнопка закрытия (крестик) не найдена!');
            }

            if (overlay) {
                overlay.addEventListener('click', closeCart);
            }
        }
    });

    return cartRoot;
}

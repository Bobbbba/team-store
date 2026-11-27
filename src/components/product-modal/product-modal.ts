import { Product } from '../../types';
import { addItem } from '../cart/cart';
import { renderCartItems } from '../cart/cartUI';
import './product-modal.css';

declare global {
    interface Window {
        openProductModal: (product: Product) => void;
    }
}

let currentProduct: Product | null = null;

export function initProductModal() {
    let modalRoot = document.getElementById('product-modal-root');
    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'product-modal-root';
        document.body.append(modalRoot);
    }

    modalRoot.innerHTML = `
    <div id="product-modal-overlay" class="product-modal-overlay hidden">
      <div class="product-modal">
        <button class="product-modal__close" id="close-product-modal">✕</button>
        
        <div class="product-modal__content">
          <!-- Левая часть: Галерея -->
          <div class="product-modal__gallery">
            <img id="modal-main-image" class="product-modal__main-img" src="" alt="Товар">
            <div id="modal-thumbnails" class="product-modal__thumbnails"></div>
          </div>

          <!-- Правая часть: Информация -->
          <div class="product-modal__info">
            <h2 id="modal-title" class="product-modal__title">Название</h2>
            <div class="product-modal__prices">
              <span id="modal-price" class="product-modal__price">0 BYN</span>
              <span id="modal-old-price" class="product-modal__old-price"></span>
            </div>
            <p id="modal-description" class="product-modal__desc">Описание товара...</p>
            
            <button id="modal-add-to-cart" class="product-modal__btn">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  `;

    const overlay = document.getElementById('product-modal-overlay')!;
    const closeBtn = document.getElementById('close-product-modal')!;
    const addToCartBtn = document.getElementById('modal-add-to-cart')!;
    const thumbnailsContainer = document.getElementById('modal-thumbnails')!;
    const mainImage = document.getElementById('modal-main-image') as HTMLImageElement;

    const closeModal = () => {
        overlay.classList.add('hidden');
        currentProduct = null;
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(); // Закрываем, если кликнули мимо окна
    });

    addToCartBtn.addEventListener('click', () => {
        if (currentProduct) {
            addItem(currentProduct, 'default', 'default', 1);

            renderCartItems();

            closeModal();
        }
    });

    window.openProductModal = (product: Product) => {
        currentProduct = product;

        (document.getElementById('modal-title') as HTMLElement).textContent = product.title;
        (document.getElementById('modal-price') as HTMLElement).textContent = `${product.price} BYN`;

        const oldPriceEl = document.getElementById('modal-old-price') as HTMLElement;
        if (product.oldPrice) {
            oldPriceEl.textContent = `${product.oldPrice} BYN`;
            oldPriceEl.style.display = 'inline';
        } else {
            oldPriceEl.style.display = 'none';
        }

        mainImage.src = product.image;

        thumbnailsContainer.innerHTML = '';
        if (product.gallery && product.gallery.length > 0) {
            product.gallery.forEach((imgSrc) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.classList.add('product-modal__thumb');

                thumb.addEventListener('click', () => {
                    mainImage.src = imgSrc;
                });
                thumbnailsContainer.append(thumb);
            });
        }

        overlay.classList.remove('hidden');
    };
}

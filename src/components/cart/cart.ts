import { CartItem, Product } from '../../types';

class Cart {
    private items: CartItem[] = [];
    // Получить  все товары

    getItems(): CartItem[] {
        return this.items;
    }

    // Добавить товар
    addItem(product: Product, size: string, color: string, quantity: number = 1): void {
        // Проверяем, есть ли уже такой товар с таким же размером и цветом
        const existingItem = this.items.find(
            (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
        );

        if (existingItem) {
            // Если есть — просто увеличиваем количество
            existingItem.quantity += quantity;
        } else {
            // Если нет — добавляем новую позицию в корзину
            this.items.push({
                ...product,
                selectedSize: size,
                selectedColor: color,
                quantity: quantity,
            });
        }
        this.saveToLocalStorage();
    }
    // 3. Изменить количество (для кнопок + и -)
    updateQuantity(id: number, size: string, color: string, delta: number): void {
        const item = this.items.find((i) => i.id === id && i.selectedSize === size && i.selectedColor === color);

        if (item) {
            item.quantity += delta;
            // Если количество стало 0 или меньше — удаляем товар
            if (item.quantity <= 0) {
                this.removeItem(id, size, color);
            }
        }
        this.saveToLocalStorage();
    }
    // 4. Удалить товар (крестик)
    removeItem(id: number, size: string, color: string): void {
        this.items = this.items.filter(
            (item) => !(item.id === id && item.selectedSize === size && item.selectedColor === color)
        );
        this.saveToLocalStorage();
    }
    // 5. Очистить корзину (кнопка "Очистить корзину")

    clear(): void {
        this.items = [];
        this.saveToLocalStorage();
    }
    // 6. Получить итоговую сумму (для блока "Всего")
    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    // 7. Получить общее количество товаров (для заголовка "1 товар")
    getTotalCoutn(): number {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // --- Сохранение в LocalStorage (чтобы корзина не пропадала при обновлении F5) ---
    private saveToLocalStorage(): void {
        localStorage.setItem('team-store-cart', JSON.stringify(this.items));
    }

    // Загрузка при старте
    loadFromLocalStorage(): void {
        const saved = localStorage.getItem('team-store-cart');
        if (saved) {
            this.items = JSON.parse(saved);
        }
    }
}

export const cart = new Cart();
cart.loadFromLocalStorage();

import { CartItem, Product } from '../../types';

let items: CartItem[] = [];

export function loadCart(): void {
    const saved = localStorage.getItem('team-store-cart');
    if (saved) {
        try {
            items = JSON.parse(saved);
        } catch (e) {
            console.error('Ошибка чтения корзины', e);
            items = [];
        }
    }
}

function saveCart(): void {
    localStorage.setItem('team-store-cart', JSON.stringify(items));
}

export function getItems(): CartItem[] {
    return [...items];
}

export function addItem(product: Product, size: string, color: string, quantity: number = 1): void {
    const existingItem = items.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        items.push({
            ...product,
            selectedSize: size,
            selectedColor: color,
            quantity: quantity,
        });
    }
    saveCart();
}

export function updateQuantity(id: number, size: string, color: string, delta: number): void {
    const item = items.find((i) => i.id === id && i.selectedSize === size && i.selectedColor === color);

    if (item) {
        item.quantity += delta;

        if (item.quantity <= 0) {
            removeItem(id, size, color);
        }
    }
    saveCart();
}

export function removeItem(id: number, size: string, color: string): void {
    items = items.filter((item) => !(item.id === id && item.selectedSize === size && item.selectedColor === color));
    saveCart();
}

export function clear(): void {
    items = [];
    saveCart();
}

export function getTotalPrice(): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getTotalCount(): number {
    return items.reduce((count, item) => count + item.quantity, 0);
}

loadCart();

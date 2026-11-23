export interface Product {
    id: number;
    title: string; // пример, что будет в карточке товара "Трусы женские 4038/28"
    price: number; // 27.99 (текущая цена)
    oldPrice?: number; // 39.99 (старая цена, опционально, так как скидки есть не всегда)
    discount?: number; // 30 (процент скидки, опционально)
    image: string; // Главная картинка
    gallery: string[]; // Массив дополнительных картинок (для миниатюр слева)
    category: string; // "Женские трусы"
    available: boolean; // true (В наличии)

    // Характеристики
    material?: string; // "хлопок 95 %"
    style?: string; // "трусики-стринги"

    // Опции для выбора
    sizes: string[];
    colors: {
        name: string; // "тёмно-синий"
    }[];
}

// Интерфейс для корзины

export interface CartItem extends Product {
    quantity: number; // Количество (цифра "1" на скриншоте)
    selectedSize: string; // Конкретный выбранный размер (например, 'M/98')
    selectedColor: string; // Конкретный выбранный цвет (например, 'тёмно-синий')
}

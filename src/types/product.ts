export type ProductGender = 'women' | 'men';

export type ProductCategory =
    'underwear' | 'bustiers' | 'bodysuits' | 'sleepwear' | 'sportswear' | 'outerwear' | 'lingerie-tops';

export interface ProductBase {
    id: number;
    title: string;
    image: string;
    available: boolean;
    price: number;
    href: string;
    gender: ProductGender;
    category: ProductCategory;
    isNew?: boolean;
    isPopular: boolean;
}

export interface ProductFilters {
    gender?: ProductGender;
    category?: ProductCategory;
    isPopular?: boolean;
    isNew?: boolean;
    available?: boolean;
}

export const products: ProductBase[] = [
    {
        id: 1,
        title: 'Сорочка ночная женская',
        image: 'src/asset/image/image1.png',
        available: true,
        price: 89,
        href: '/product/1',
        isNew: true,
        isPopular: true,
        gender: 'women',
        category: 'sleepwear',
    },
    {
        id: 2,
        title: 'Пижама женская',
        image: 'src/asset/image/image2.png',
        available: true,
        price: 129,
        href: '/product/2',
        isNew: false,
        isPopular: true,
        gender: 'women',
        category: 'sleepwear',
    },
    {
        id: 3,
        title: 'Бюстье женское',
        image: 'src/asset/image/image3.png',
        available: false,
        price: 159,
        href: '/product/3',
        isNew: true,
        isPopular: true,
        gender: 'women',
        category: 'bustiers',
    },
    {
        id: 4,
        title: 'Халат женский',
        image: 'src/asset/image/image4.png',
        available: true,
        price: 145,
        href: '/product/4',
        isNew: false,
        isPopular: false,
        gender: 'women',
        category: 'sleepwear',
    },
    {
        id: 5,
        title: 'Легинсы женские',
        image: 'src/asset/image/image5.png',
        available: true,
        price: 179,
        href: '/product/5',
        isNew: false,
        isPopular: true,
        gender: 'women',
        category: 'sportswear',
    },
    {
        id: 6,
        title: 'Джемпер женский',
        image: 'src/asset/image/image6.png',
        available: false,
        price: 249,
        href: '/product/6',
        isNew: true,
        isPopular: false,
        gender: 'women',
        category: 'tops',
    },
    {
        id: 7,
        title: 'Джемпер женский',
        image: 'src/asset/image/image7.png',
        available: true,
        price: 139,
        href: '/product/7',
        isNew: false,
        isPopular: true,
        gender: 'women',
        category: 'tops',
    },
    {
        id: 8,
        title: 'Трусы мужские',
        image: 'src/asset/image/men-image1.png',
        available: true,
        price: 59,
        href: '/product/8',
        isNew: true,
        isPopular: true,
        gender: 'men',
        category: 'underwear',
    },
    {
        id: 9,
        title: 'Майка мужская',
        image: 'src/asset/image/men-image2.png',
        available: true,
        price: 69,
        href: '/product/9',
        isNew: false,
        isPopular: true,
        gender: 'men',
        category: 'undershirts',
    },
    {
        id: 10,
        title: 'Пижама мужская',
        image: 'src/asset/image/men-image3.png',
        available: true,
        price: 149,
        href: '/product/10',
        isNew: false,
        isPopular: false,
        gender: 'men',
        category: 'sleepwear',
    },
    {
        id: 11,
        title: 'Спортивные брюки мужские',
        image: 'src/asset/image/men-image4.png',
        available: false,
        price: 189,
        href: '/product/11',
        isNew: true,
        isPopular: false,
        gender: 'men',
        category: 'sportswear',
    },
    {
        id: 12,
        title: 'Куртка мужская',
        image: 'src/asset/image/men-image5.png',
        available: true,
        price: 299,
        href: '/product/12',
        isNew: false,
        isPopular: true,
        gender: 'men',
        category: 'outerwear',
    },
];

export interface ProductItem {
    title: string;
    image: string;
    available: boolean;
    price: number;
    href: string;
    isNew?: boolean;
}

export const popularProducts: ProductItem[] = [
    {
        title: 'Сорочка ночная женская',
        image: 'src/asset/image/image1.png',
        available: true,
        price: 89,
        href: '/product/1',
        isNew: true,
    },
    {
        title: 'Пижама женская',
        image: 'src/asset/image/image2.png',
        available: true,
        price: 129,
        href: '/product/2',
        isNew: false,
    },
    {
        title: 'Бюстье женское',
        image: 'src/asset/image/image3.png',
        available: false,
        price: 159,
        href: '/product/3',
        isNew: true,
    },
    {
        title: 'Халат женский',
        image: 'src/asset/image/image4.png',
        available: true,
        price: 145,
        href: '/product/4',
        isNew: false,
    },
    {
        title: 'Легинсы женские',
        image: 'src/asset/image/image5.png',
        available: true,
        price: 179,
        href: '/product/5',
        isNew: false,
    },
    {
        title: 'Джемпер женский',
        image: 'src/asset/image/image6.png',
        available: false,
        price: 249,
        href: '/product/6',
        isNew: true,
    },
    {
        title: 'Джемпер женский',
        image: 'src/asset/image/image7.png',
        available: true,
        price: 139,
        href: '/product/7',
        isNew: false,
    },
];

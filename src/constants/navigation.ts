interface NavigationItem {
    title: string;
    href: string;
    image: string;
}

export const navigationItems: NavigationItem[] = [
    {
        title: 'Женщинам',
        href: '/women',
        image: 'src/components/categories/images/women.png',
    },
    {
        title: 'Мужчинам',
        href: '/men',
        image: 'src/components/categories/images/men.png',
    },
    {
        title: 'Новинки',
        href: '/new',
        image: 'src/components/categories/images/new.png',
    },
    {
        title: 'Акции',
        href: '/sale',
        image: 'src/components/categories/images/sale.png',
    },
];

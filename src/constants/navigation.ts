interface NavigationItem {
    title: string;
    href: string;
}

export const navigationItems: NavigationItem[] = [
    { title: 'Женщинам', href: '/women' },
    { title: 'Мужчинам', href: '/men' },
    { title: 'Новинки', href: '/new' },
    { title: 'Акции', href: '/sale' },
];

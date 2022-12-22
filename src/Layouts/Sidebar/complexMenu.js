export default [
    {
        path: '/home',
        name: 'abcd',
        locale: 'menu.home',
        routes: [
            {
                path: '/home/overview',
                name: 'abcd',
                hideInMenu: true,
                locale: 'menu.home.overview',
            },
            {
                path: '/home/search',
                name: 'efg',
                hideInMenu: true,
                locale: 'menu.home.search',
            },
        ],
    },
    {
        path: '/other',
        name: 'adnan',
        locale: 'menu.other',
        routes: [
            {
                path: '/other/upLoad',
                name: 'adnan',
            },
            {
                path: '/other/upLoadMenu',
                name: 'aslam',
                // locale: 'menu.other.upLoadMenu',
            },
            {
                path: '/other/homeEdit',
                name: 'adsnan',
                hideInMenu: true,
            },
        ],
    },
];

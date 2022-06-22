const works = [
    {
        title: 'Android App',
        works: [
            {
                name: 'Запоминатор',
                date: '03.2022',
                textLink: 'open in google play',
                steck: ['React Native CLI', 'Redux Toolkit'],
                link: 'https://play.google.com/store/apps/details?id=com.eclipse.my_to_do_list',
                img: '/images/works/app/2.webp',
                increase: false,
                id: 1
            },
            {
                name: 'Build Tower',
                textLink: 'open in google play',
                steck: ['C#', 'Unity'],
                date: '11.2020',
                link: 'https://play.google.com/store/apps/details?id=com.TELGame.BuildTower',
                img: '/images/works/app/1.webp',
                increase: false,
                id: 2
            },
        ]
    },

    {
        title: 'SPA - React, Redux, Next',
        works: [
            {
                name: 'Третья версия моего сайта -  портфолио',
                textLink: 'open repository',
                steck: ['React', 'Next js', 'SCSS'],
                date: '06.2022',
                link: '',
                img: '/images/works/react/14.png',
                increase: true,
                id: 70
            },
            {
                name: 'Приложения для создание шаблонов',
                textLink: 'open repository',
                steck: ['React', 'Redux', 'SCSS'],
                date: '05.2021',
                link: 'https://github.com/WilliamsDima/creater-SPA-Pattern',
                img: '/images/works/react/10.png',
                increase: true,
                id: 3
            },
            {
                name: 'Вторая версия моего сайта -  портфолио',
                textLink: 'open repository',
                steck: ['React', 'Redux', 'SCSS', 'Axios'],
                date: '06.2021',
                link: '',
                img: '/images/works/react/13.png',
                increase: true,
                id: 4
            },
            {
                name: 'Тестовое задание, сайт-портфолио',
                textLink: 'open repository',
                steck: ['React', 'Redux', 'SCSS'],
                date: '06.2021',
                link: 'https://github.com/WilliamsDima/test_task_Axeta',
                img: '/images/works/react/11.png',
                increase: true,
                id: 5
            },
        ]
    },

    {
        title: 'MPA - jQuery, JS, SCSS, NodeJS, PHP, Gulp',
        works: [
            {
                name: 'Верстка сайта по макету',
                textLink: 'open repository',
                steck: ['jQuery', 'JS', 'SCSS', 'Gulp'],
                date: '02.2021',
                link: 'https://github.com/WilliamsDima/Mogo',
                img: '/images/works/mpa/3.png',
                increase: true,
                id: 6
            },
            {
                name: 'Верстка сайта по шаблону',
                textLink: 'open repository',
                steck: ['JS', 'SCSS', 'Gulp'],
                date: '02.2021',
                link: 'https://github.com/WilliamsDima/Clean_and_simple_website',
                img: '/images/works/mpa/1.png',
                increase: true,
                id: 7
            },
            {
                name: 'Верстка сайта банка по макету',
                textLink: 'open repository',
                steck: ['JS', 'SCSS', 'Gulp'],
                date: '02.2021',
                link: 'https://github.com/WilliamsDima/Model_window',
                img: '/images/works/mpa/2.png',
                increase: true,
                id: 8
            },
            {
                name: 'Верстка сайта - портфолио по макету',
                textLink: 'open repository',
                steck: ['JS', 'SCSS', 'Gulp'],
                date: '02.2021',
                link: 'https://github.com/WilliamsDima/Page-Template',
                img: '/images/works/mpa/4.png',
                increase: true,
                id: 9
            },
            {
                name: 'Многостраничный блог',
                textLink: 'open repository',
                steck: ['jQuery', 'JS', 'SCSS', 'Gulp'],
                date: '03.2021',
                link: 'https://github.com/WilliamsDima/Personal-blog',
                img: '/images/works/mpa/5.png',
                increase: true,
                id: 10
            },
            {
                name: 'Верстка сайта по макету',
                textLink: 'open repository',
                steck: ['jQuery', 'JS', 'SCSS', 'Gulp'],
                date: '03.2021',
                link: 'https://github.com/WilliamsDima/pc_courses',
                img: '/images/works/mpa/8.png',
                increase: true,
                id: 11
            },
            {
                name: 'Первая версия моего сайта -  портфолио',
                textLink: 'open repository',
                steck: ['jQuery', 'JS', 'PHP', 'SCSS', 'Gulp'],
                date: '04.2021',
                link: 'https://github.com/WilliamsDima/MyPortfole-version-1',
                img: '/images/works/mpa/7.png',
                increase: true,
                id: 12
            },
            {
                name: 'Тестовое задание, верстка и фильтр магазина',
                textLink: 'open repository',
                steck: ['JS', 'SCSS', 'Gulp'],
                date: '05.2021',
                link: 'https://github.com/WilliamsDima/Cats-store',
                img: '/images/works/mpa/9.png',
                increase: true,
                id: 13
            },
            {
                name: 'Ребрендинг сайта',
                textLink: 'open repository',
                steck: ['JS', 'CSS'],
                date: '12.2020',
                link: 'https://github.com/WilliamsDima/Alfastroi',
                img: '/images/works/mpa/6.png',
                increase: true,
                id: 14
            }
        ]
    },
];

export default function handler(req, res) {
    res.status(200).json(works)
}
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Docs',
    tagline: 'Baptiste Hardy\'s docs',
    url: 'https://docs.hardy.sh',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Baptiste Hardy',
    projectName: 'docs',

    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://gitlab.com/baptistehardy/docs',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        ({
            navbar: {
                title: 'BH',
                logo: {
                    alt: 'Docs Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        to: '/docs',
                        position: 'left',
                        label: 'Docs',
                        activeBaseRegex: '/docs/'
                    },
                    {
                        to: '/homelab',
                        position: 'left',
                        label: 'Homelab',
                        activeBaseRegex: '/homelab/'
                    },
                    {
                        href: 'https://gitlab.com/baptistehardy/docs',
                        label: 'GitLab',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} Baptiste Hardy. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'homelab',
                path: 'homelab',
                routeBasePath: 'homelab',
            }
        ]
    ]
};

module.exports = config;

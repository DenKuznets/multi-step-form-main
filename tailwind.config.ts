import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],

    theme: {
        container: {
            center: true,
            padding: {
                // DEFAULT: '1rem',
                // sm: '2rem',
                // lg: '4rem',
                // xl: '5rem',
                // '2xl': '6rem'
            }
        },
        fontFamily: {
            sans: ['var(--font-raleway)', 'sans-serif'],
            serif: ['var(--font-merriweather)'],
            body: ['var(--font-leaguespartan)']
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },

            colors: {
                violet: '#6344C6',
                darkViolet: '#262439',
                customYellow: '#FFC448',
                almostBlack: '#11141D',
                customOrange: '#F26440',
                pTextColor: 'grey',
                aTextColor: 'grey'
            },
            screens: {
                uhd: '2560px',
                laptopL: '1400px',
                laptop: '1024px',
                mobileL: '425px',
                mobileM: '375px',
                mobileS: '320px'
            }
        }
    },
    plugins: []
};
export default config;

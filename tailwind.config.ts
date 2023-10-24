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
            serif: ['var(--font-ubuntu)', 'sans-serif'],
            body: ['var(--font-ubuntu)', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },

            colors: {
                marineBlue: 'hsl(213, 96%, 18%)',
                purplishBlue: 'hsl(243, 100%, 62%)',
                pastelBlue: 'hsl(228, 100%, 84%)',
                lightBlue: 'hsl(206, 94%, 87%)',
                strawberryRed: 'hsl(354, 84%, 57%)',
                coolGray: 'hsl(231, 11%, 63%)',
                lightGray: 'hsl(229, 24%, 87%)',
                magnolia: 'hsl(217, 100%, 97%)',
                alabaster: 'hsl(231, 100%, 99%)'
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

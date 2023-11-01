/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                'sans': ['"DM Sans"', 'sans-serif'],
                'display': ['"DM Serif Display"', 'serif'],
            },
        },
	},

    daisyui: {
        themes: [
            {
                cpp: {
                    "primary": '#25DB35',
                    "secondary": '#C5DCC7',
                    "accent": '#204063',
                },
            },
        ],
    },

	plugins: [require("daisyui")],
}
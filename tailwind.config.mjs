/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	screens: {
    		xsm: '435px',
    		sm: '640px',
    		md: '768px',
    		lg: '1024px',
    		xl: '1280px',
    		'2xl': '1536px'
    	},
    	extend: {
    		colors: {
    			igOrange: '#f9ce34',
    			igRed: '#ee2a7b',
    			igPurple: '#6228d7',
    			blurple: '#7289da',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			sans: [DM Sans", sans-serif],\n    			display: [DM Serif Display", serif]
    		},
    		fontSize: {
    			nv: [1.25rem, {\\r\\n                    lineHeight:1,\\r\\n                }]
    		},
    		typography: {
    			DEFAULT: {
    				css: {
    					color: '#204063',
    					h1: {
    						color: '#204063'
    					},
    					h2: {
    						color: '#204063'
    					},
    					h3: {
    						color: '#204063'
    					},
    					strong: {
    						color: '#204063'
    					}
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
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

	plugins: [
        require('@tailwindcss/typography'),
        require("daisyui"),
        require("tailwindcss-animate")
    ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			},
  			sidebar: {
  				DEFAULT: 'var(--sidebar)',
  				foreground: 'var(--sidebar-foreground)',
  				primary: {
  					DEFAULT: 'var(--sidebar-primary)',
  					foreground: 'var(--sidebar-primary-foreground)'
  				},
  				accent: {
  					DEFAULT: 'var(--sidebar-accent)',
  					foreground: 'var(--sidebar-accent-foreground)'
  				},
  				border: 'var(--sidebar-border)',
  				ring: 'var(--sidebar-ring)'
  			},
  			header: {
  				bg: 'var(--header-bg)',
  				border: 'var(--header-border)',
  				'logo-bg': 'var(--header-logo-bg)',
  				'logo-text': 'var(--header-logo-text)',
  				'name-text': 'var(--header-name-text)',
  				'nav-active': 'var(--header-nav-active)',
  				'nav-text': 'var(--header-nav-text)',
  				'button-bg': 'var(--header-button-bg)',
  				'button-text': 'var(--header-button-text)',
  				'button-hover': 'var(--header-button-hover)'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-sans)',
  				'ui-serif',
  				'serif'
  			],
  			serif: [
  				'var(--font-serif)',
  				'Georgia',
  				'Cambria',
  				'Times New Roman',
  				'Times',
  				'serif'
  			],
  			mono: [
  				'var(--font-mono)',
  				'ui-monospace',
  				'monospace'
  			]
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: 'calc(var(--radius) + 4px)'
  		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			DEFAULT: 'var(--shadow)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
  		letterSpacing: {
  			tighter: 'calc(var(--tracking-normal) - 0.05em)',
  			tight: 'calc(var(--tracking-normal) - 0.025em)',
  			normal: 'var(--tracking-normal)',
  			wide: 'calc(var(--tracking-normal) + 0.025em)',
  			wider: 'calc(var(--tracking-normal) + 0.05em)',
  			widest: 'calc(var(--tracking-normal) + 0.1em)'
  		},
  		spacing: {
  			pixel: '0.21rem'
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			glow: 'glow 2s ease-in-out infinite alternate',
  			'pixel-fade': 'pixelFade 0.3s ease-in-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			glow: {
  				'0%': {
  					boxShadow: '0 0 5px var(--accent), 0 0 10px var(--accent)'
  				},
  				'100%': {
  					boxShadow: '0 0 10px var(--accent), 0 0 20px var(--accent)'
  				}
  			},
  			pixelFade: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.8)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [],
}


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#9b87f5',
					foreground: '#fff'
				},
				secondary: {
					DEFAULT: '#E5DEFF',
					foreground: '#6E59A5'
				},
				card: {
					DEFAULT: "#fff",
					foreground: "#403E43"
				},
				accent: {
					DEFAULT: "#D3E4FD",
					foreground: "#221F26"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
				  "0%": { opacity: "0", transform: "translateY(10px)" },
				  "100%": { opacity: "1", transform: "translateY(0)" }
				},
				'scale-in': {
				  "0%": { transform: "scale(0.95)", opacity: "0" },
				  "100%": { transform: "scale(1)", opacity: "1" }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.4s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

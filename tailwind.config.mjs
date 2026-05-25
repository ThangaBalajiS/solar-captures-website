/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0F172A', // Punchier, deeper navy
				accent: '#F59E0B',  // Warmer, punchier amber/yellow
				earth: '#F4F1EA',   // Warm paper/earth tone for backgrounds
				leaf: '#4A5D4E',    // Subtle eco-friendly green for accents
			},
			borderRadius: {
				'xl': '1rem',
				'2xl': '1.5rem',
				'3xl': '2rem',
			}
		},
	},
	plugins: [],
}

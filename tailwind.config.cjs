module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {},
		fontFamily: {
			'title': ['Overpass', 'sans-serif'],
			'display': ['freight-display-pro'],
			'body': ['Overpass', 'sans-serif']
		},
		colors: {
			'white': '#FFFFFF',
			"grey": {
				DEFAULT: '#28292A',
				"50": "#EAEBEB",
				"100": "#D3D4D5",
				"200": "#A6A8AA",
				"300": "#7C8083",
				"400": "#525456",
				"500": "#28292A",
				"600": "#202122",
				"700": "#191A1A",
				"800": "#0F0F10",
				"900": "#070808"
			}
		},
	},
	plugins: [],
}

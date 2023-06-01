module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'bg-image': "url('/images/bg.svg')",
				'hitokan': "url('/images/hitokan.png')",
				'portfolio': "url('/images/portfolio.png')",
			},
			colors: {
				'theme-bg': "#1E2022",
				'theme-black': "#3C4043",
				'theme-white': "#D7E6EF",
			},
			animation: {
				'spin-slow': 'spin 5s linear infinite',
			},
			height: {
				'top': 'calc(85vh)',
				'99': '99%',
				'300': '300%'
			},
			width: {
				'99': '99%',
			},
			fontFamily: {
				Geologica: ["Geologica"],
				NotoSansJP: ["Noto Sans JP"],
      },
		},
	},
	plugins: [],
};

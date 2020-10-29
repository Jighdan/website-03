export default {
	target: "static",
	head: {
		title: "Jighdan's Portfolio",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	css: ["~/assets/styles/_base.scss", "~/assets/styles/_color-modes.scss"],

	plugins: ["~/plugins/vue-tooltip.js", "~/plugins/vue-lazyload.js"],

	components: true,

	buildModules: [
		"@nuxtjs/color-mode",
		"@nuxtjs/style-resources",
		"@nuxtjs/eslint-module",
		"@aceforth/nuxt-optimized-images",
	],

	modules: [
		"nuxt-svg-loader",
		"nuxt-webfontloader",
		"@nuxtjs/sitemap",
		"@nuxtjs/robots",
		"nuxt-social-meta",
	],

	// Fonts
	webfontloader: {
		google: {
			families: ["Alata&display=swap"],
		},
	},

	// Shared style variables & mixins
	styleResources: {
		scss: ["assets/styles/_mixins.scss", "assets/styles/_variables.scss"],
	},

	// Color module
	colorMode: {
		preference: "system",
		fallback: "dark",
		componentName: "SectionColorScheme",
		cookie: {
			key: "web-color-mode",
		},
	},

	// Optimized Images
	optimizedImages: {
		optimizeImages: true,
	},

	// Sitemap
	sitemap: {
		hostname: "https://github.com",
		gzip: true,
	},

	// Social Meta Tags
	nuxtSocialMeta: {
		url: "https://jighdan.github.io/",
		title: "Jighdan's Portfolio",
		site_name: "https://jighdan.github.io/",
		description: "I am Jighdan, an always-learning programmer.",
		img: "favicon.ico",
		locale: "en_US",
		twitter: "@jighdan",
		twitter_card: "I am Jighdan, an always-learning programmer.",
		themeColor: "#fbf1c7",
	},

	build: {},
};

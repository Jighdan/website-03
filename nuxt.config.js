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
			{
				hid: "description",
				name: "description",
				content: "I am Jighdan, an always-learning web developer.",
			},
			{
				name: "title",
				content: "Jighdan's Portfolio",
			},
			{
				name: "description",
				content: "I am Jighdan, an always-learning web developer.",
			},
			// <!-- Open Graph / Facebook -->
			{
				property: "og:title",
				content: "Jighdan's Portfolio",
			},
			{
				property: "og:description",
				content: "I am Jighdan, an always-learning web developer.",
			},
			{
				property: "og:image",
				content: "assets/images/avatar.jpeg",
			},
			// <!-- Twitter -->
			{
				property: "twitter:card",
				content: "summary_large_image",
			},
			{
				property: "twitter:title",
				content: "Jighdan's Portfolio",
			},
			{
				property: "twitter:description",
				content: "I am Jighdan, an always-learning web developer.",
			},
			{
				property: "twitter:image",
				content: "assets/images/avatar.jpeg",
			},
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

	modules: ["nuxt-svg-loader", "nuxt-webfontloader"],

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

	optimizedImages: {
		optimizeImages: true,
	},

	build: {},
};

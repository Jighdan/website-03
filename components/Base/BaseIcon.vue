<template>
	<component
		:is="`icon-${name}`"
		v-if="tooltip"
		v-tooltip.top-center="{ content: styledName }"
		class="svg__icon"
	/>
	<component :is="`icon-${name}`" v-else class="svg__icon" />
</template>

<script>
// Languages
import IconPython from "~/assets/svg/python.svg";
import IconJavascript from "~/assets/svg/javascript.svg";
import IconHtml from "~/assets/svg/html5.svg";
import IconCss from "~/assets/svg/css3.svg";
import IconSass from "~/assets/svg/sass.svg";
import IconSql from "~/assets/svg/mysql.svg";
import IconTypescript from "~/assets/svg/typescript.svg";

// Frameworks
import IconNuxt from "~/assets/svg/nuxt-dot-js.svg";
import IconFlask from "~/assets/svg/flask.svg";
import IconVue from "~/assets/svg/vue-dot-js.svg";
import IconQuasar from "~/assets/svg/quasar.svg";
import IconReact from "~/assets/svg/react.svg";
import IconSvelte from "~/assets/svg/svelte.svg";
import IconTailwind from "~/assets/svg/tailwindcss.svg";
import IconBootstrap from "~/assets/svg/bootstrap.svg";

// Tools
import IconBash from "~/assets/svg/gnubash.svg";
import IconGit from "~/assets/svg/git.svg";
import IconNode from "~/assets/svg/node-dot-js.svg";
import IconNpm from "~/assets/svg/npm.svg";
import IconTravis from "~/assets/svg/travisci.svg";
import IconEslint from "~/assets/svg/eslint.svg";
import IconHeroku from "~/assets/svg/heroku.svg";
import IconNetlify from "~/assets/svg/netlify.svg";
import IconFigma from "~/assets/svg/figma.svg";

// Color Schemes
import IconLight from "~/assets/svg/mode-light.svg";
import IconDark from "~/assets/svg/mode-dark.svg";
import IconSepia from "~/assets/svg/mode-sepia.svg";

// Contact
import IconLinkedin from "~/assets/svg/linkedin.svg";
import IconGithub from "~/assets/svg/github.svg";
import IconWhatsapp from "~/assets/svg/whatsapp.svg";
import IconTwitter from "~/assets/svg/twitter.svg";
import IconEmail from "~/assets/svg/email.svg";

export default {
	components: {
		IconPython,
		IconNuxt,
		IconSass,
		IconFlask,
		IconJavascript,
		IconHtml,
		IconCss,
		IconSql,
		IconTypescript,
		IconVue,
		IconQuasar,
		IconReact,
		IconTailwind,
		IconBootstrap,
		IconGit,
		IconNode,
		IconNpm,
		IconTravis,
		IconEslint,
		IconHeroku,
		IconNetlify,
		IconFigma,
		IconBash,
		IconLinkedin,
		IconGithub,
		IconWhatsapp,
		IconTwitter,
		IconEmail,
		IconLight,
		IconDark,
		IconSepia,
		IconSvelte,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		tooltip: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		styledName() {
			return this.name.replace(/^\w/, (char) => char.toUpperCase());
		},
	},
};
</script>

<style lang="scss">
.tooltip {
	margin-bottom: 0.75rem;
	display: block;
	z-index: 1000;

	.tooltip-inner {
		border-radius: 8px 16px;
		padding: 3px 7.5px;
	}
}
</style>

<template>
	<component :is="`icon-${name}`" class="svg__icon" />
</template>

<script>
// Languages
import IconPython from "~/assets/svg/python.svg";
import IconJavascript from "~/assets/svg/javascript.svg";
import IconHtml from "~/assets/svg/html5.svg";
import IconCss from "~/assets/svg/css3.svg";
import IconSass from "~/assets/svg/sass.svg";
import IconSql from "~/assets/svg/mysql.svg";
import IconLatex from "~/assets/svg/latex.svg";

// Frameworks
import IconNuxt from "~/assets/svg/nuxt-dot-js.svg";
import IconFlask from "~/assets/svg/flask.svg";
import IconVue from "~/assets/svg/vue-dot-js.svg";
import IconQuasar from "~/assets/svg/quasar.svg";
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

// UI
import IconBack from "~/assets/svg/go-back.svg";

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
		IconLatex,
		IconVue,
		IconQuasar,
		IconTailwind,
		IconBootstrap,
		IconGit,
		IconNode,
		IconBack,
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
	},
	props: {
		name: {
			type: String,
			required: true,
		},
	},
};
</script>

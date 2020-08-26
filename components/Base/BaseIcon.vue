<template>
	<component :is="`icon-${name}`" class="svg__icon" />
</template>

<script>
// Languages
import IconPython from "~/assets/images/svg/python.svg";
import IconJavascript from "~/assets/images/svg/javascript.svg";
import IconHtml from "~/assets/images/svg/html5.svg";
import IconCss from "~/assets/images/svg/css3.svg";
import IconSass from "~/assets/images/svg/sass.svg";
import IconSql from "~/assets/images/svg/mysql.svg";
import IconLatex from "~/assets/images/svg/latex.svg";

// Frameworks
import IconNuxt from "~/assets/images/svg/nuxt-dot-js.svg";
import IconFlask from "~/assets/images/svg/flask.svg";
import IconVue from "~/assets/images/svg/vue-dot-js.svg";
import IconQuasar from "~/assets/images/svg/quasar.svg";
import IconTailwind from "~/assets/images/svg/tailwindcss.svg";
import IconBootstrap from "~/assets/images/svg/bootstrap.svg";

// Tools
import IconBash from "~/assets/images/svg/gnubash.svg";
import IconGit from "~/assets/images/svg/git.svg";
import IconNode from "~/assets/images/svg/node-dot-js.svg";
import IconNpm from "~/assets/images/svg/npm.svg";
import IconTravis from "~/assets/images/svg/travisci.svg";
import IconEslint from "~/assets/images/svg/eslint.svg";
import IconHeroku from "~/assets/images/svg/heroku.svg";
import IconNetlify from "~/assets/images/svg/netlify.svg";
import IconFigma from "~/assets/images/svg/figma.svg";

// Color Schemes
import IconLight from "~/assets/images/svg/mode-light.svg";
import IconDark from "~/assets/images/svg/mode-dark.svg";
import IconSepia from "~/assets/images/svg/mode-sepia.svg";

// Contact
import IconLinkedin from "~/assets/images/svg/linkedin.svg";
import IconGithub from "~/assets/images/svg/github.svg";
import IconWhatsapp from "~/assets/images/svg/whatsapp.svg";
import IconTwitter from "~/assets/images/svg/twitter.svg";
import IconEmail from "~/assets/images/svg/email.svg";

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

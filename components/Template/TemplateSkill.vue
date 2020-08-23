<template>
	<section class="skill__section">
		<h3 class="skill__title text__highlight">{{ title }}</h3>
		<section class="skills__list">
			<component
				:is="`icon-${item}`"
				v-for="item in list"
				:key="item"
				class="skill__image svg__icon"
			/>
		</section>
	</section>
</template>

<script>
// Languages
import IconPython from "@/assets/images/svg/python.svg";
import IconJavascript from "@/assets/images/svg/javascript.svg";
import IconHtml from "@/assets/images/svg/html5.svg";
import IconCss from "@/assets/images/svg/css3.svg";
import IconSass from "@/assets/images/svg/sass.svg";
import IconSql from "@/assets/images/svg/mysql.svg";
import IconLatex from "@/assets/images/svg/latex.svg";
// Frameworks
import IconNuxt from "@/assets/images/svg/nuxt-dot-js.svg";
import IconFlask from "@/assets/images/svg/flask.svg";
import IconVue from "@/assets/images/svg/vue-dot-js.svg";
import IconQuasar from "@/assets/images/svg/quasar.svg";
import IconTailwind from "@/assets/images/svg/tailwindcss.svg";
import IconBootstrap from "@/assets/images/svg/bootstrap.svg";
// Tools
import IconGit from "@/assets/images/svg/git.svg";
import IconNode from "@/assets/images/svg/node-dot-js.svg";
import IconNpm from "@/assets/images/svg/npm.svg";
import IconTravis from "@/assets/images/svg/travisci.svg";
import IconEslint from "@/assets/images/svg/eslint.svg";
import IconHeroku from "@/assets/images/svg/heroku.svg";
import IconNetlify from "@/assets/images/svg/netlify.svg";
import IconFigma from "@/assets/images/svg/figma.svg";

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
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		list: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.skill__section {
	@include margin-set($y: 1.5rem);

	.skill__title {
		@include margin-set($y: 1rem);
	}

	.skills__list {
		@include grid-layout(0.75rem, auto-fill, 40px, 1fr, center);
		@include padding-set($x: 0.5rem);

		.skill__image {
			width: 35px;
			max-width: calc(35px + 2.5vh);
			height: auto;
		}
	}
}
</style>

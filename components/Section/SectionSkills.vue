<template>
	<section class="section__container">
		<h2 class="section__title">Skills</h2>

		<section class="skills__container">
			<section class="skill__section">
				<h3 class="skill__title">Languages</h3>
				<section class="skills__list">
					<SVGPython class="skill__image" />
					<SVGJavascript class="skill__image" />
					<SVGHTML class="skill__image" />
					<SVGCSS class="skill__image" />
					<SVGSass class="skill__image" />
					<SVGSQLite class="skill__image" />
					<SVGLaTeX class="skill__image" />
				</section>
			</section>

			<section class="skill__section">
				<h3 class="skill__title">Frameworks</h3>
				<section class="skills__list">
					<SVGVue class="skill__image" />
					<SVGNuxt class="skill__image" />
					<SVGQuasar class="skill__image" />
					<SVGFlask class="skill__image" />
					<SVGTailwind class="skill__image" />
					<SVGBootstrap class="skill__image" />
				</section>
			</section>

			<section class="skill__section">
				<h3 class="skill__title">Tools</h3>
				<section class="skills__list">
					<SVGGit class="skill__image" />
					<SVGNode class="skill__image" />
					<SVGNPM class="skill__image" />
					<SVGTravis class="skill__image" />
					<SVGEslint class="skill__image" />
					<SVGHeroku class="skill__image" />
					<SVGNetlify class="skill__image" />
					<SVGFigma class="skill__image" />
				</section>
			</section>
		</section>
	</section>
</template>

<script>
import SVGPython from "@/assets/images/svg/python.svg";
import SVGNuxt from "@/assets/images/svg/nuxt-dot-js.svg";
import SVGSass from "@/assets/images/svg/sass.svg";
import SVGFlask from "@/assets/images/svg/flask.svg";
import SVGJavascript from "@/assets/images/svg/javascript.svg";
import SVGHTML from "@/assets/images/svg/html5.svg";
import SVGCSS from "@/assets/images/svg/css3.svg";
import SVGSQLite from "@/assets/images/svg/mysql.svg";
import SVGLaTeX from "@/assets/images/svg/latex.svg";
import SVGVue from "@/assets/images/svg/vue-dot-js.svg";
import SVGQuasar from "@/assets/images/svg/quasar.svg";
import SVGTailwind from "@/assets/images/svg/tailwindcss.svg";
import SVGBootstrap from "@/assets/images/svg/bootstrap.svg";
import SVGGit from "@/assets/images/svg/git.svg";
import SVGNode from "@/assets/images/svg/node-dot-js.svg";
import SVGNPM from "@/assets/images/svg/npm.svg";
import SVGTravis from "@/assets/images/svg/travisci.svg";
import SVGEslint from "@/assets/images/svg/eslint.svg";
import SVGHeroku from "@/assets/images/svg/heroku.svg";
import SVGNetlify from "@/assets/images/svg/netlify.svg";
import SVGFigma from "@/assets/images/svg/figma.svg";

export default {
	components: {
		SVGPython,
		SVGNuxt,
		SVGSass,
		SVGFlask,
		SVGJavascript,
		SVGHTML,
		SVGCSS,
		SVGSQLite,
		SVGLaTeX,
		SVGVue,
		SVGQuasar,
		SVGTailwind,
		SVGBootstrap,
		SVGGit,
		SVGNode,
		SVGNPM,
		SVGTravis,
		SVGEslint,
		SVGHeroku,
		SVGNetlify,
		SVGFigma,
	},
};
</script>

<style lang="scss" scoped>
.skill__section {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;

	.skill__title {
		color: $color;
		margin-bottom: 0.45rem;
		margin-top: 1rem;
	}

	.skills__list {
		@include grid-layout(0.75rem, auto-fill, 40px, 1fr);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		place-items: center;

		.skill__image {
			height: auto;
			width: 35px;
		}
	}
}
</style>

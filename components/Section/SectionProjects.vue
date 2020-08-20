<template>
	<section class="section__container">
		<h2 class="section__title">Projects</h2>
		<article class="projects__container">
			<section class="project__section">
				<section class="project__intro">
					<h3 class="project__title">Notw</h3>
					<section class="project__skills">
						<SVGPython class="skill__image" />
						<SVGBash class="skill__image" />
						<SVGSQL class="skill__image" />
					</section>
				</section>
				<p class="project__text">
					A command line note-taking application, with CRUD functions; based on
					OOP principles
				</p>
				<section class="project__links">
					<a
						href="https://github.com/Jighdan/notew"
						target="_blank"
						class="project__link text__link"
						>Code</a
					>
				</section>
			</section>

			<section class="project__section">
				<section class="project__intro">
					<h3 class="project__title">Flasky Fox</h3>
					<section class="project__skills">
						<SVGNuxt class="skill__image" />
						<SVGSass class="skill__image" />
						<SVGPython class="skill__image" />
						<SVGFlask class="skill__image" />
					</section>
				</section>
				<p class="project__text">
					A static website, first generated using Frozen-Flask and later with
					Nuxt.
				</p>
				<section class="project__links">
					<a
						href="https://github.com/Jighdan/flasky_fox"
						target="_blank"
						class="project__link text__link"
						>Code</a
					>
					<a
						href="https://jighdan.github.io/flasky_fox/"
						target="_blank"
						class="project__link text__link"
						>Demo</a
					>
				</section>
			</section>

			<section class="project__section">
				<section class="project__intro">
					<h3 class="project__title">(36+3) Questions</h3>
					<section class="project__skills">
						<SVGJavascript class="skill__image" />
						<SVGHTML class="skill__image" />
						<SVGCSS class="skill__image" />
					</section>
				</section>
				<p class="project__text">
					A website that displays a series of questions that were portrayed in a
					social study.
				</p>
				<section class="project__links">
					<TextLink
						link="https://github.com/Jighdan/36-Questions"
						content="Code"
						:target="true"
						class="project__link"
					/>
					<TextLink
						link="https://jighdan.github.io/36-Questions"
						content="Demo"
						:target="true"
						class="project__link"
					/>
				</section>
			</section>
		</article>
	</section>
</template>

<script>
import SVGPython from "@/assets/images/svg/python.svg";
import SVGBash from "@/assets/images/svg/gnubash.svg";
import SVGSQL from "@/assets/images/svg/sqlite.svg";
import SVGNuxt from "@/assets/images/svg/nuxt-dot-js.svg";
import SVGSass from "@/assets/images/svg/sass.svg";
import SVGFlask from "@/assets/images/svg/flask.svg";
import SVGJavascript from "@/assets/images/svg/javascript.svg";
import SVGHTML from "@/assets/images/svg/html5.svg";
import SVGCSS from "@/assets/images/svg/css3.svg";
import TextLink from "~/components/TextLink.vue";

export default {
	components: {
		TextLink,
		SVGPython,
		SVGBash,
		SVGSQL,
		SVGNuxt,
		SVGSass,
		SVGFlask,
		SVGJavascript,
		SVGHTML,
		SVGCSS,
	},
};
</script>

<style lang="scss" scoped>
.projects__container {
	@include grid-layout(1rem, auto-fill, 15rem, 1fr);
	margin-top: 1rem;
	padding: 0.25rem 0.5rem;
}

.project__section {
	@include border(0 16px, $color-soft, 2px);
	padding: 0.5rem 0.75rem;
	transition: all 0.45s ease-in;
}

.project__intro {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	.project__title {
		color: $color;
		margin: 0;
	}

	.project__skills {
		max-width: 40%;

		.skill__image {
			height: auto;
			width: 25px;
		}
	}

	.project__text {
		font-size: 0.85em;
	}
}

.project__links {
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-evenly;
}

.project__section:hover {
	border-color: $color-border;
}

.skill__image {
	@include svg-hover($transition, $color);
}
</style>

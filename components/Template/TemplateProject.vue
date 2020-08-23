<template>
	<section class="project__container">
		<section class="project__intro">
			<h3 class="project__title text__highlight">{{ project.title }}</h3>
			<section class="project__tags">
				<component
					:is="`icon-${tag}`"
					v-for="tag in project.tags"
					:key="tag"
					class="svg__icon"
				/>
			</section>
		</section>
		<p class="project__text">{{ project.description }}</p>
		<section class="project__links">
			<TextLink
				v-if="project.links.demo"
				:link="project.links.demo"
				:target="true"
				content="Demo"
			/>
			<TextLink
				v-if="project.links.code"
				:link="project.links.code"
				:target="true"
				content="Code"
			/>
		</section>
	</section>
</template>

<script>
import IconPython from "@/assets/images/svg/python.svg";
import IconJavascript from "@/assets/images/svg/javascript.svg";
import IconHtml from "@/assets/images/svg/html5.svg";
import IconCss from "@/assets/images/svg/css3.svg";
import IconSass from "@/assets/images/svg/sass.svg";
import IconSql from "@/assets/images/svg/mysql.svg";
import IconLatex from "@/assets/images/svg/latex.svg";
import IconNuxt from "@/assets/images/svg/nuxt-dot-js.svg";
import IconFlask from "@/assets/images/svg/flask.svg";
import IconVue from "@/assets/images/svg/vue-dot-js.svg";
import IconQuasar from "@/assets/images/svg/quasar.svg";
import IconTailwind from "@/assets/images/svg/tailwindcss.svg";
import IconBootstrap from "@/assets/images/svg/bootstrap.svg";
import IconBash from "@/assets/images/svg/gnubash.svg";
import TextLink from "~/components/TextLink.vue";

export default {
	components: {
		TextLink,
		IconPython,
		IconJavascript,
		IconHtml,
		IconCss,
		IconSass,
		IconSql,
		IconLatex,
		IconNuxt,
		IconFlask,
		IconVue,
		IconQuasar,
		IconTailwind,
		IconBootstrap,
		IconBash,
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.project__container {
	padding: 0.5rem 0.75rem;
	display: inline-grid;
	grid-template-rows: auto 1fr auto;
	gap: 1rem;
	grid-gap: 1rem;
	border-width: 2px;
	border-style: solid;
	border-radius: 0 16px;
}

.project__intro {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	.project__title {
		margin-top: 0;
		margin-bottom: 0;
	}

	.project__tags {
		width: 40%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.svg__icon {
			height: auto;
			width: 25px;
			margin-left: 0.1rem;
			margin-right: 0.1rem;
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
</style>

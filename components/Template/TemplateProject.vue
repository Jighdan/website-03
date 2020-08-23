<template>
	<section class="project__section">
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
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.project__section {
	border-radius: 0 16px;
	border-width: 2px;
	border-style: solid;
	padding: 0.5rem 0.75rem;
}

.project__intro {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	.project__title {
		margin: 0;
	}

	.project__tags {
		max-width: 40%;

		.svg__icon {
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
</style>

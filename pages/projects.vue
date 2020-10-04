<template>
	<section class="section__projects__all">
		<nuxt-link to="/" class="section__projects__all__link text__link"
			>Go Back</nuxt-link
		>
		<article class="section__projects__all__wrap">
			<TemplateProjectExpanded
				v-for="(project, index) in allProjects"
				:key="index"
				:project="project"
			/>
		</article>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters({
			allProjects: "projects/getAllProjects",
		}),
	},
	head() {
		return {
			title: "Jighdan's Portfolio | Projects",
		};
	},
};
</script>

<style lang="scss">
.section__projects__all {
	&__link {
		@include margin-set($top: 0.5rem, $bottom: 1rem, $left: 0.5rem);
	}

	&__wrap {
		@include padding-set($y: 0.25rem, $x: 0.5rem);
		column-count: 1;
		column-gap: 1.5em;

		template-project-expanded {
			display: inline-block;
		}
	}
}

@media only screen and (min-width: 1025px) {
	.section__projects__all__wrap {
		column-count: 3;
	}
}

@media only screen and (max-width: 1024px) and (min-width: 760px) {
	.section__projects__all__wrap {
		column-count: 2;
	}
}
</style>

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
import TemplateProjectExpanded from "~/components/Template/TemplateProjectExpanded";

export default {
	components: {
		TemplateProjectExpanded,
	},
	computed: {
		...mapGetters({
			allProjects: "projects/getAllProjects",
		}),
	},
};
</script>

<style lang="scss">
.section__projects__all {
	&__link {
		@include margin-set($top: 0.5rem, $bottom: 1rem, $left: 0.5rem);
	}

	&__wrap {
		@include grid-layout(2.5rem, auto-fill, 18rem, 1fr);
		@include padding-set($y: 0.25rem, $x: 0.5rem);
	}
}
</style>

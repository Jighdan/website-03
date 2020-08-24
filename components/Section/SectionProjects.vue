<template>
	<section class="section__container">
		<h2 class="section__title">Projects</h2>
		<article class="projects__container">
			<TemplateProject
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</article>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import TemplateProject from "~/components/Template/TemplateProject";

export default {
	components: {
		TemplateProject,
	},
	computed: mapGetters({
		projects: "projects/getProjects",
	}),
};
</script>

<style lang="scss">
.projects__container {
	@include grid-layout(1rem, auto-fill, 15rem, 1fr);
	@include margin-set($top: 1rem);
	@include padding-set($y: 0.25rem, $x: 0.5rem);
}
</style>

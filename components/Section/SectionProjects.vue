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
import TemplateProject from "~/components/Template/TemplateProject";

export default {
	components: {
		TemplateProject,
	},
	computed: {
		projects() {
			return this.$store.state.projects.projects;
		},
	},
};
</script>

<style lang="scss">
.projects__container {
	@include grid-layout(1rem, auto-fill, 15rem, 1fr);
	margin-top: 1rem;
	padding: 0.25rem 0.5rem;
}
</style>

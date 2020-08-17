<template>
	<section class="projects__section">
		<section class="project__wrap" v-for="project in allProjects" :key="project.id">
			<ProjectTemplate :project="project" />
		</section>
	</section>
</template>

<script>
import ProjectTemplate from "./ProjectTemplate";

export default {
	name: "Projects",
	components: {
		ProjectTemplate
	}
}
</script>

<style lang="scss" scoped>
	.projects__section {
		display: grid;
		justify-items: center;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 2rem;
	}
</style>
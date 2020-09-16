<template>
	<section class="section__container">
		<h2 class="section__container__title">Projects</h2>
		<article class="section__projects__main__container">
			<TemplateProjectCompact
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</article>
		<nuxt-link to="/projects" class="section__projects__main__link text__link"
			>Check more</nuxt-link
		>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: mapGetters({
		projects: "projects/getMainProjects",
	}),
};
</script>

<style lang="scss">
.section__projects__main__container {
	@include grid-layout(1.25rem, auto-fill, 15rem, 1fr);
	@include margin-set($top: 1rem);
	@include padding-set($y: 0.25rem, $x: 0.5rem);
}

.section__projects__main__link {
	@include margin-set($top: 0.25rem, $right: 0.5rem);
	float: right;
	font-size: 1.1rem;
	font-weight: 500;
}
</style>

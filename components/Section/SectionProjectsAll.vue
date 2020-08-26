<template>
	<section>
		<section class="section__projects__all__options">
			<nuxt-link to="/" class="text__link">Go Back</nuxt-link>
			<section class="section__projects__all__filter">
				<h1 class="section__projects__all__title">Filter by:</h1>
				<section class="section__projects__all__tags">
					<BaseIcon
						v-for="tag in availableTags"
						:key="tag"
						:icon-name="tag"
						class="section__projects__all__tag"
					/>
				</section>
			</section>
		</section>
		<article class="section__projects__all__container">
			<TemplateProjectExpanded
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</article>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import TemplateProjectExpanded from "~/components/Template/TemplateProjectExpanded";
import BaseIcon from "~/components/Base/BaseIcon";

export default {
	components: {
		TemplateProjectExpanded,
		BaseIcon,
	},
	computed: mapGetters({
		projects: "projects/getAllProjects",
		availableTags: "projects/getAvailableTags",
		projectsByTag: "projects/getProjectsByTag",
	}),
};
</script>

<style lang="scss">
.section__projects__all__options {
	@include flex-layout(space-between, center, $direction: column, $wrap: true);

	.section__projects__all__filter {
		@include flex-layout(space-between, center);

		.section__projects__all__tags {
			@include flex-layout(space-evenly, center, $wrap: true);

			.section__projects__all__tag {
				width: 30px;
			}
		}
	}
}

.section__projects__all__container {
	@include grid-layout(2.5rem, auto-fill, 18rem, 1fr);
	@include padding-set($y: 0.25rem, $x: 0.5rem);
}
</style>

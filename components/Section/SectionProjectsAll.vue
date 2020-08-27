<template>
	<section class="section__projects__all">
		<section class="section__projects__all__options">
			<nuxt-link to="/" class="section__projects__all_link text__link"
				>Go Back</nuxt-link
			>
			<section class="section__projects__all__filter">
				<h1 class="section__projects__all__title">Filter by:</h1>
				<section class="section__projects__all__tags">
					<section
						v-for="tag in availableTags"
						:key="tag"
						class="section__projects__all__tags__wrap"
						@click="setCurrentTag(tag)"
					>
						<BaseIcon :name="tag" class="section__projects__all__tag" />
					</section>
				</section>
			</section>
		</section>

		<article class="section__projects__all__container">
			<TemplateProjectExpanded
				v-for="project in filterProjects"
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
	data() {
		return {
			tagFilter: false,
		};
	},
	computed: {
		...mapGetters({
			projects: "projects/getAllProjects",
			availableTags: "projects/getAvailableTags",
		}),
		filterProjects() {
			const includesTag = (project) => project.tags.includes(this.tagFilter);
			return this.tagFilter ? this.projects.filter(includesTag) : this.projects;
		},
	},
	methods: {
		setCurrentTag(tag) {
			this.tagFilter = tag;
		},
	},
};
</script>

<style lang="scss">
.section__projects__all__options {
	@include flex-layout(space-between, center, $direction: column);
	@include margin-set($bottom: 2rem);

	.section__projects__all_link {
		align-self: flex-start;
	}

	.section__projects__all__filter {
		@include flex-layout(center, center, $direction: column);

		.section__projects__all__title {
			@include margin-set($y: 0.5rem);
		}

		.section__projects__all__tags {
			@include flex-layout(space-evenly, center, $wrap: true);

			.section__projects__all__tags__wrap {
				@include margin-set($x: 0.45rem);

				.section__projects__all__tag {
					width: 30px;
				}
			}
		}
	}
}

.section__projects__all__container {
	@include grid-layout(2.5rem, auto-fill, 18rem, 1fr);
	@include padding-set($y: 0.25rem, $x: 0.5rem);
}
</style>

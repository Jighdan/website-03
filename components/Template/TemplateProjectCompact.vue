<template>
	<section class="template__project__compact__container shaped__container">
		<section class="template__project__compact__intro">
			<h3 class="template__project__compact__title text__highlight">
				{{ project.title }}
			</h3>
			<section class="template__project__compact__tags">
				<BaseIcon
					v-for="tag in skills"
					:key="tag.name"
					:name="tag.name"
					:text="tag.styled"
					class="template__project__compact__icon"
				/>
			</section>
		</section>
		<p class="template__project__compact__text">
			{{ project.description }}
		</p>
		<section class="template__project__compact__links">
			<BaseTextLink
				v-if="project.links.demo"
				:link="project.links.demo"
				:target="true"
				content="Demo"
			/>
			<BaseTextLink
				v-if="project.links.code"
				:link="project.links.code"
				:target="true"
				content="Code"
			/>
		</section>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapGetters({
			getSkillByName: "skills/getSkillByName",
		}),
		skills() {
			return this.project.tags.map((tag) => this.getSkillByName(tag));
		},
	},
};
</script>

<style lang="scss">
.template__project__compact__container {
	@include padding-set($y: 0.85rem, $x: 1.85rem);
	@include inline-grid-layout(1rem, auto 1fr auto);
	@include border-radius-cut(0, 16px);
	border-width: 2px;
	border-style: solid;
}

.template__project__compact__intro {
	@include flex-layout(space-between, flex-start);

	.template__project__compact__title {
		@include margin-set($y: 0);
	}

	.template__project__compact__tags {
		width: 40%;
		@include flex-layout(flex-end, center);

		.template__project__compact__icon {
			@include margin-set($x: 0.2rem);
			height: auto;
			width: 27.5px;
		}
	}

	.template__project__compact__text {
		font-size: 0.85em;
	}
}

.template__project__compact__links {
	@include flex-layout(space-evenly, center);
	@include margin-set($x: auto);
	width: 75%;
}
</style>

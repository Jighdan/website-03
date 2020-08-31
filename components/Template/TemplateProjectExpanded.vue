<template>
	<section class="project__expanded__container shaped__container">
		<section class="project__expanded__intro">
			<h3 class="project__expanded__title text__highlight">
				{{ project.title }}
			</h3>
			<section class="project__expanded__tags">
				<BaseIcon
					v-for="tag in project.tags"
					:key="tag"
					:name="tag"
					class="project__expanded__icon svg__icon"
				/>
			</section>
		</section>
		<p class="project__expanded__text">
			{{ project.descriptionLong }}
		</p>
		<section class="project__expanded__links">
			<BaseTextLink
				v-if="project.links.demo"
				:link="project.links.demo"
				:target="true"
				content="Demo"
				class="project__expanded__link"
			/>
			<BaseTextLink
				v-if="project.links.code"
				:link="project.links.code"
				:target="true"
				content="Code"
				class="project__expanded__link"
			/>
		</section>
	</section>
</template>

<script>
import BaseIcon from "~/components/Base/BaseIcon";
import BaseTextLink from "~/components/Base/BaseTextLink";

export default {
	components: {
		BaseTextLink,
		BaseIcon,
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.project__expanded__container {
	@include padding-set($y: 1rem, $x: 1.5rem);
	@include inline-grid-layout(0.75rem, auto 1fr auto);
	@include border-radius-cut(0, 32px);
	border-width: 3px;
	border-style: solid;
}

.project__expanded__intro {
	@include flex-layout(space-between, flex-start);

	.project__expanded__title {
		@include margin-set($y: 0);
		font-size: 1.25em;
	}

	.project__expanded__tags {
		@include flex-layout(flex-end, center);
		width: 40%;

		.project__expanded__icon {
			@include margin-set($x: 2.5%);
			height: auto;
			width: 30px;
		}
	}
}

.project__expanded__text {
	@include margin-set($x: 1rem);
	font-size: 0.9em;
	line-height: 1.6;
}

.project__expanded__links {
	@include flex-layout(space-evenly, center);
	@include margin-set($x: auto);
	width: 75%;

	.project__expanded__link {
		font-size: 1.1em;
		font-weight: 600;
	}
}
</style>

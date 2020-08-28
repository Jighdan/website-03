<template>
	<section class="template__skill">
		<h3 class="template__skill__title text__highlight">{{ title }}</h3>
		<section class="template__skills__list">
			<BaseIcon
				v-for="item in list"
				:key="item"
				:name="item"
				class="template__skill__icon"
			/>
		</section>
	</section>
</template>

<script>
import BaseIcon from "~/components/Base/BaseIcon";

export default {
	components: {
		BaseIcon,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		list: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.template__skill {
	.template__skill__title {
		@include margin-set($y: 1rem);
		font-size: 1.15em;
		font-style: italic;
	}

	.template__skills__list {
		@include grid-layout(0.75rem, auto-fill, 40px, 1fr, center);

		.template__skill__icon {
			width: 35px;
			max-width: calc(37.5px + 2.5vh);
		}
	}
}
</style>

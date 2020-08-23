<template>
	<ul class="mode__container">
		<li v-for="color of colors" :key="color">
			<component
				:is="`icon-${color}`"
				class="mode__icon"
				@click="$colorMode.preference = color"
			/>
		</li>
	</ul>
</template>

<script>
import IconLight from "@/assets/images/svg/mode-light.svg";
import IconDark from "@/assets/images/svg/mode-dark.svg";
import IconSepia from "@/assets/images/svg/mode-sepia.svg";

export default {
	components: {
		IconLight,
		IconSepia,
		IconDark,
	},
	data() {
		return {
			colors: ["light", "dark", "sepia"],
		};
	},
};
</script>

<style lang="scss">
.mode__container {
	display: flex;
	justify-content: flex-end;

	.mode__icon {
		margin-left: 0.1rem;
		margin-right: 0.1rem;

		&:hover,
		&:active {
			transform: scale(1.1);
		}
	}
}
</style>

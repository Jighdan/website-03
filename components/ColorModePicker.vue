<template>
	<ul class="mode__container">
		<li v-for="color of colors" :key="color">
			<a class="mode__item svg__wrap" target="_self">
				<component
					:is="`icon-${color}`"
					class="mode__icon svg__icon"
					@click="$colorMode.preference = color"
				/>
			</a>
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
	@include flex-layout(flex-end, center);
	@include margin-set($bottom: 0);

	.mode__item {
		@include margin-set($x: 0.45rem);

		.mode__icon {
			width: minmax(30px, 45px);
			height: auto;
		}

		&:hover,
		&:active,
		&:focus {
			.mode__icon {
				transform: scale(1.25);
			}
		}
	}
}
</style>

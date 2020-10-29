<template>
	<section class="section__color__scheme">
		<a
			v-for="color in colors"
			:key="color.name"
			class="section__color__scheme__mode svg__wrap"
			target="_self"
			tabindex="0"
			@click="$colorMode.preference = color.name"
		>
			<BaseIcon
				:name="color.name"
				:text="color.styled"
				class="section__color__scheme__icon svg__icon"
			/>
		</a>
	</section>
</template>

<script>
export default {
	data() {
		return {
			colors: [
				{
					name: "light",
					styled: "Light",
				},
				{
					name: "dark",
					styled: "Dark",
				},
				{
					name: "sepia",
					styled: "Sepia",
				},
			],
		};
	},
};
</script>

<style lang="scss">
.section__color__scheme {
	@include flex-layout(flex-end, center);
	@include margin-set($bottom: 0);

	.section__color__scheme__mode {
		@include margin-set($x: 0.45rem);

		.section__color__scheme__icon {
			width: 30px;
			height: auto;
		}

		&:hover,
		&:active {
			.section__color__scheme__icon {
				transform: scale(1.25);
			}
		}
	}
}
</style>

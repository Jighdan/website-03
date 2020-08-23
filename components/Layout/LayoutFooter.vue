<template>
	<footer class="footer">
		<ColorModePicker />
		<p class="footer__text">
			Made by
			<TextLink link="#" content="Reinny Almonte" />
		</p>
	</footer>
</template>

<script>
import ColorModePicker from "~/components/ColorModePicker.vue";

export default {
	components: {
		ColorModePicker,
	},
};
</script>

<style lang="scss">
.footer {
	@include flex-layout(space-between, center);
	@include margin-set($top: 3rem);
	@include padding-set($y: 3rem, $x: 0.5rem);
	width: 100%;
}
</style>

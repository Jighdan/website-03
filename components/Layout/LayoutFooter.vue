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
	margin-top: 3rem;
	padding: 0.25rem 0.5rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>

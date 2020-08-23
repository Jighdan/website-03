<template>
	<header class="header">
		<ColorModePicker />
		<LayoutNavigation />
	</header>
</template>

<script>
import LayoutNavigation from "~/components/Layout/LayoutNavigation.vue";
import ColorModePicker from "~/components/ColorModePicker.vue";

export default {
	components: {
		LayoutNavigation,
		ColorModePicker,
	},
};
</script>

<style lang="scss">
.header {
	margin-bottom: 1rem;
	width: 100%;
}
</style>

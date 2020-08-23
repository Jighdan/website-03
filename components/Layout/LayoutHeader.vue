<template>
	<header class="header">
		<LayoutNavigation />
	</header>
</template>

<script>
import LayoutNavigation from "~/components/Layout/LayoutNavigation.vue";

export default {
	components: {
		LayoutNavigation,
	},
};
</script>

<style lang="scss">
.header {
	@include margin-set($bottom: 1rem);
	width: 100%;
}
</style>

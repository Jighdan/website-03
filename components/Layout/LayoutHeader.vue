<template>
	<header class="layout__header">
		<SectionNavigation />
	</header>
</template>

<script>
import SectionNavigation from "~/components/Section/SectionNavigation";

export default {
	components: {
		SectionNavigation,
	},
};
</script>

<style lang="scss">
.layout__header {
	@include margin-set($bottom: 1rem);
	width: 100%;
}
</style>

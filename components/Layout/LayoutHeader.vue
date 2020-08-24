<template>
	<header class="layout__header">
		<SectionNav />
	</header>
</template>

<script>
import SectionNav from "~/components/Section/SectionNav";

export default {
	components: {
		SectionNav,
	},
};
</script>

<style lang="scss">
.layout__header {
	@include margin-set($bottom: 1rem);
	width: 100%;
}
</style>

<template>
	<footer class="footer">
		<SectionColorScheme />
		<p class="footer__text">
			Made by
			<BaseTextLink link="#" content="Reinny Almonte" />
		</p>
	</footer>
</template>

<script>
import SectionColorScheme from "~/components/Section/SectionColorScheme.vue";
import BaseTextLink from "~/components/Base/BaseTextLink";

export default {
	components: {
		SectionColorScheme,
		BaseTextLink,
	},
};
</script>

<style lang="scss">
.footer {
	@include flex-layout(space-between, center);
	@include margin-set($top: 1.5rem);
	@include padding-set($y: 0.25rem, $x: 0.5rem);
	width: 100%;
}
</style>

<template>
	<footer class="footer">
		<SectionColorScheme />
		<p class="footer__text">
			Made by
			<BaseTextLink link="#" content="Reinny Almonte" />
		</p>
	</footer>
</template>

<style lang="scss">
.footer {
	@include flex-layout(space-between, center);
	@include margin-set($top: 1.5rem);
	@include padding-set($y: 0.25rem, $x: 0.5rem);
	width: 100%;
}
</style>

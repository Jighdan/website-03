<template>
	<main class="default__main">
		<LayoutHeader />
		<Nuxt class="main__content" />
		<LayoutFooter />
	</main>
</template>

<script>
export default {
	scrollToTop: false,
};
</script>

<style lang="scss">
.default__main {
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;

	.main__content {
		@include margin-set($y: auto, $x: calc(10vw + 2.5%));
	}
}
</style>

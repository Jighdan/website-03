<template>
	<main class="default__main">
		<LayoutHeader />

		<Nuxt />

		<footer class="footer">
			<p class="footer__text">
				Made by
				<TextLink link="#" content="Reinny Almonte" />
			</p>
		</footer>
	</main>
</template>

<style lang="scss">
.header {
	margin-bottom: 1rem;
	width: 100%;

	.nav {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding: 0.5rem 0.25rem;
		width: inherit;

		.nav__item {
			padding: 0.1rem 0.25rem;
			text-decoration: none;
			font-size: 1.05em;
		}
	}
}

.footer {
	margin-top: 3rem;
	padding: 0.25rem 0.5rem;
	width: 100%;

	.footer__text {
		text-align: right;
	}
}
</style>

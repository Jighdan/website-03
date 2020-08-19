<template>
	<main class="main">
		<BaseHeader />

		<Nuxt />

		<footer class="footer">
			<p class="footer__text">
				Made by
				<a href="https://github.com/jighdan" class="text__link">Jighdan</a>
			</p>
		</footer>
	</main>
</template>

<style lang="scss">
.main {
	color: #282828;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
	user-select: none;
}

.footer {
	padding: 0.25rem 0.5rem;
	width: 100%;

	.footer__text {
		text-align: right;
	}
}
</style>

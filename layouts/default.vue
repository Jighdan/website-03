<template>
	<main class="default__main">
		<header class="header">
			<nav class="nav">
				<TextLink
					link="https://www.linkedin.com/in/reinny-almonte-ramos-b70312186/"
					content="LinkedIn"
					:target="true"
					class="nav__item"
				/>
				<TextLink
					link="https://github.com/jighdan"
					content="GitHub"
					:target="true"
					class="nav__item"
				/>
				<TextLink link="#" content="Resume" class="nav__item" />
			</nav>
		</header>

		<Nuxt />

		<footer class="footer">
			<p class="footer__text">
				Made by
				<TextLink
					link="https://github.com/jighdan"
					content="Jighdan"
					:target="true"
				/>
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
	padding: 0.25rem 0.5rem;
	width: 100%;

	.footer__text {
		text-align: right;
	}
}
</style>

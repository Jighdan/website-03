<template>
	<header class="header">
		<nav class="nav">
			<a
				href="https://www.linkedin.com/in/reinny-almonte-ramos-b70312186/"
				class="nav__item text__link"
				>LinkedIn</a
			>
			<a href="https://github.com/jighdan" class="nav__item text__link"
				>GitHub</a
			>
			<a href="#" class="nav__item text__link">Resume</a>
		</nav>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
		}
	}
}
</style>

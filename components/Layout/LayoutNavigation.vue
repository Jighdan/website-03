<template>
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
</template>

<script>
import TextLink from "~/components/TextLink.vue";

export default {
	name: "LayoutNavigation",
	components: {
		TextLink,
	},
};
</script>

<style lang="scss">
.nav {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 0.5rem 0.25rem;
	width: inherit;

	.nav__item {
		padding: 0.1rem 0.25rem;
		font-size: 1.05em;
	}
}
</style>

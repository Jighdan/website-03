<template>
	<header class="layout__header">
		<nav class="layout__nav">
			<TextLink
				link="https://www.linkedin.com/in/reinny-almonte-ramos-b70312186/"
				content="LinkedIn"
				:target="true"
				class="nav__item"
			/>
			<BaseTextLink
				link="https://github.com/jighdan"
				content="GitHub"
				:target="true"
				class="nav__item"
			/>
			<BaseTextLink
				link="#"
				content="Resume"
				class="nav__item"
				:target="true"
			/>
		</nav>
	</header>
</template>

<script>
import BaseTextLink from "~/components/Base/BaseTextLink";

export default {
	components: {
		BaseTextLink,
	},
};
</script>

<style lang="scss">
.layout__header {
	@include margin-set($bottom: 1rem);
	width: 100%;

	.nav {
		@include flex-layout(space-evenly, center, true);
		@include padding-set($y: 0.5rem, $x: 0.25rem);
		width: inherit;

		.nav__item {
			@include padding-set($y: 0.1rem, $x: 0.25rem);
			font-size: 1.05em;
		}
	}
}
</style>

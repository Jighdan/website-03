<template>
	<div class="layout-default">
		<header v-if="$route.name !== 'index'" class="home-link">
			<nav>
				<NuxtLink to="/">Back</NuxtLink>
			</nav>
		</header>

		<div class="layout-page">
			<Nuxt />
		</div>
	</div>
</template>

<style lang="postcss">
html {
	font-family: "Fira Sans Condensed", sans-serif;
	font-size: 18px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	@apply text-gray-900 bg-gray-50;
}

html,
body {
	@apply h-full w-full;
}

body {
	@apply grid place-items-center;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.layout-default {
	@apply py-14;
}

.layout-page {
	@apply min-h-full min-w-full;
}

.home-link {
	@apply mb-5;
}

// Page transitions
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>

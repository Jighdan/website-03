<template>
	<div class="layout-container">
		<Nuxt />
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

.layout-container {
	@apply min-h-full min-w-full;
}
</style>

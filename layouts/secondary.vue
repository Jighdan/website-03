<template>
	<div class="layout-default">
		<header class="home-link">
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
.home-link {
	@apply mb-5;
}

.layout-page {
	@apply min-h-full min-w-full;
}
</style>

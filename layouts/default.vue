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
.layout-default {
	@apply py-14;
}

.layout-page {
	@apply min-h-full min-w-full;
}

.home-link {
	@apply mb-5;
}
</style>

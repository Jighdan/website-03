<template>
	<div class="page-wrap">
		<main>
			<TextTitle>Reinny Almonte</TextTitle>
			<TextParagraph
				>Hey ~ I'm a Software Engineer from Dominican Republic 🇩🇴</TextParagraph
			>
		</main>

		<footer>
			<Contacts />
		</footer>
	</div>
</template>

<style lang="postcss" scoped>
.page-wrap {
	@apply flex flex-col justify-center items-center gap-y-4;

	main {
		@apply flex flex-col gap-y-1 text-center;
	}
}
</style>

<template>
	<main class="main">
		<SectionHeader />
		<article class="main__content">
			<SectionIntro />
			<SectionSkills />
			<SectionProjects />
			<SectionContact />
		</article>
	</main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
	color: #282828;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
	user-select: none;
}

.main__content {
	margin: 0 calc(10vw + 2.5%);
	min-height: 100vh;
}

.text__link {
	@include styled-link($color);
}
</style>

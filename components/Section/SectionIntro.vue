<template>
	<section class="intro">
		<img
			class="intro__image"
			src="~/assets/images/avatar.jpeg"
			alt="Picture of Reinny Almonte"
		/>

		<section class="intro__text">
			<h1 class="intro__title">Hey ~ I'm Reinny 🤙</h1>
			<section class="intro__body">
				<p class="intro__text">
					After writing
					<a
						href="https://github.com/Jighdan/MUBI-wbs"
						class="text__link"
						target="_blank"
						>my first Python script</a
					>, programming became my main curiosity. Since then, I have been
					learning about the different programming languages, paradigms, and
					development processes that it involves.
				</p>
				<p class="intro__text">
					But what I have found the most amazing thing about it, is how
					programming enables you to communicate even with someone that doesn't
					speak the same language. The power of contribution. 💪
				</p>
				<p class="intro__text">
					I enjoy experimenting with new technologies and programming languages,
					interacting with other members from diverse communities, contributing
					to open source, and solving programming challenges. A bit more of my
					skills and projects below! 🔥
				</p>
			</section>
		</section>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2.5rem;
}

.intro__image {
	@include border(3.5rem 0);
	height: auto;
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	width: 25rem;
}

.intro__text {
	max-width: 100%;
	width: 30rem;

	.intro__title {
		color: $color;
		font-size: 2em;
		margin-bottom: 0;
	}

	.intro__body {
		margin-top: 0.25rem;
		max-width: 100%;

		.intro__text {
			margin-bottom: 2vh;
			margin-top: 2vh;
		}
	}
}
</style>

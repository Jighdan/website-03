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
					<TextLink
						link="https://github.com/Jighdan/MUBI-wbs"
						content="my first Python script"
						:target="true"
					/>, programming became my main curiosity. Since then, I have been
					learning about the different programming languages, paradigms, and
					development processes that it involves.
				</p>
				<p class="intro__text">
					What I have found the most fascinating about programming is how it
					enables you to communicate even with someone that doesn't speak the
					same language; the potential of contribution. 💪
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
import TextLink from "~/components/TextLink.vue";

export default {
	components: {
		TextLink,
	},
};
</script>

<style lang="scss" scoped>
.intro {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
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
		color: $color-primary;
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

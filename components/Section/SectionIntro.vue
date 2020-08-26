<template>
	<section class="intro">
		<BaseImage />
		<section class="intro__text">
			<h1 class="intro__title text__highlight">Hey ~ I'm Reinny 🤙</h1>
			<section class="intro__body">
				<p class="intro__text">
					After writing
					<BaseTextLink
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
import BaseImage from "~/components/Base/BaseImage";
import BaseTextLink from "~/components/Base/BaseTextLink";

export default {
	components: {
		BaseImage,
		BaseTextLink,
	},
};
</script>

<style lang="scss">
.intro {
	@include flex-layout(space-between, center, true);
}

.intro__text {
	max-width: 100%;
	width: 30rem;

	.intro__title {
		@include margin-set($bottom: 0);
		font-size: 2em;
	}

	.intro__body {
		@include margin-set($top: 0.25rem);
		max-width: 100%;

		.intro__text {
			@include margin-set($y: 2vh);
		}
	}
}
</style>

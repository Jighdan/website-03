<template>
	<section class="section__intro">
		<TemplateImage />
		<section class="section__intro__container">
			<h1 class="section__intro__title text__highlight">Hey ~ I'm Reinny 🤙</h1>
			<section class="section__intro__body">
				<p class="section__intro__text">
					After writing
					<BaseTextLink
						link="https://github.com/Jighdan/MUBI-wbs"
						content="my first Python script"
						:target="true"
					/>, programming became my main curiosity. Since then, I have been
					learning about the different programming languages, paradigms, and
					development processes that it involves.
				</p>
				<p class="section__intro__text">
					What I have found the most fascinating about programming, in general,
					is how it enables you as a programmer to communicate even with someone
					that doesn't speak the same language; the potential of contribution.
					💪
				</p>
				<p class="section__intro__text">
					I enjoy experimenting with new technologies and programming languages,
					interacting with other members from diverse communities, solving
					programming challenges, and contributing to open source projects
					<BaseTextLink
						link="https://github.com/python/python-docs-es/issues"
						content="(Help translating the Python docs)"
						:target="true"
					/>. More about my skills and projects below! 🔥
				</p>
			</section>
		</section>
	</section>
</template>

<script>
import TemplateImage from "~/components/Template/TemplateImage";
import BaseTextLink from "~/components/Base/BaseTextLink";

export default {
	components: {
		TemplateImage,
		BaseTextLink,
	},
};
</script>

<style lang="scss">
.section__intro {
	@include flex-layout(space-between, center, true);
}

.section__intro__container {
	max-width: 100%;
	width: 30rem;

	.section__intro__title {
		@include margin-set($bottom: 0.75rem);
		font-size: 2em;
	}

	.section__intro__body {
		@include margin-set($top: 0.25rem);
		max-width: 100%;

		.section__intro__text {
			@include margin-set($y: 2vh);
		}
	}
}
</style>

<template>
	<section class="section__intro">
		<section v-lazy-container="{ selector: 'img' }">
			<img
				:data-src="require('~/assets/images/avatar.jpeg')"
				:data-loading="require('~/assets/images/avatar.jpeg?lqip')"
				alt="Reinny at the beach"
				class="section__intro__image"
			/>
		</section>

		<section class="section__intro__container">
			<h1 class="section__intro__title text__highlight">Hey ~ I'm Reinny 🤙</h1>
			<section class="section__intro__body">
				<p class="section__intro__text">
					I enjoy learning, reading, solving problems, films, connecting with
					members from the diverse technology communities, contributing to
					open-source software, and trying out new tools (in particular
					state-of-art tech!).
				</p>
				<p class="section__intro__text">
					More of my skills and work down below.
				</p>
				<p class="section__intro__text">
					If you like charts and visuals, check my profile at
					<BaseTextLink
						link="https://sourcerer.io/jighdan"
						content="Sourcerer.io"
						:target="true"
					/>
					.
				</p>
			</section>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.section__intro {
	@include flex-layout(space-between, center, true);

	.section__intro__image {
		@include border-radius-cut(0, 3.5rem);
		@include margin-set($right: 1rem);
		height: auto;
		max-width: 100%;
		width: 25rem;

		&[lazy="loading"] {
			filter: blur(10px);
		}
	}
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

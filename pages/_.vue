<template>
	<section class="error__container">
		<h1 class="error__title section__title">404</h1>
		<p class="error__text">The page you were looking for doesn't exist.</p>
		<nuxt-link class="svg__wrap error__link" to="/">
			<BaseIcon name="back" text="Go Back" class="error__icon" />
		</nuxt-link>
	</section>
</template>

<script>
export default {
	scrollToTop: false,
};
</script>

<style lang="scss">
.error__container {
	@include flex-layout(center, center, $direction: column);

	.error__title {
		@include margin-set($top: 2.5vh, $bottom: 1vh);
		font-size: 7.5em;
		text-decoration: none;
	}

	.error__text {
		font-size: 1.75em;
		text-align: center;
	}

	.error__link {
		@include margin-set($top: 2.5rem, $bottom: 1rem);

		&:hover,
		&:active,
		&:focus {
			.error__icon {
				transform: scale(1.5);
				transform: rotate(180deg);
			}
		}

		.error__icon {
			width: 75px;
			height: auto;
			transform: rotate(180deg);
		}
	}
}
</style>

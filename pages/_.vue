<template>
	<section class="error__container">
		<h1 class="error__title section__title">404</h1>
		<p class="error__text">The page you were looking for doesn't exist.</p>
		<nuxt-link class="svg__wrap error__link" to="/"
			><IconBack class="error__icon svg__icon"
		/></nuxt-link>
	</section>
</template>

<script>
import IconBack from "~/assets/images/svg/go-back.svg";

export default {
	components: {
		IconBack,
	},
	scrollToTop: false,
};
</script>

<style lang="scss">
.error__container {
	@include flex-layout(center, center, $direction: column);

	.error__title {
		@include margin-set($y: 2.5vh);
		font-size: 6.5em;
		text-decoration: none;
	}

	.error__text {
		font-size: 1.5em;
	}

	.error__link {
		margin-top: 3.5rem;

		&:hover,
		&:active,
		&:focus {
			.error__icon {
				transform: scale(1.5);
				transform: rotate(180deg);
			}
		}

		.error__icon {
			width: 60px;
			height: auto;
			transform: rotate(180deg);
		}
	}
}
</style>

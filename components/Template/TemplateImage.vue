<template>
	<img
		:src="image.placeholder"
		:srcset="image.src"
		:alt="image.alt"
		class="base__image"
		loading="lazy"
	/>
</template>

<script>
export default {
	props: {
		image: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.base__image {
	@include border-radius-cut(0, 3.5rem);
	@include margin-set($right: 1rem);
	height: auto;
	max-width: 100%;
	width: 25rem;
}
</style>

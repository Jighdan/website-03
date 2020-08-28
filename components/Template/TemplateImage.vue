<template>
	<img
		:src="imagePlaceholder"
		:srcset="image"
		alt="Picture of Reinny Almonte"
		class="base__image"
		loading="lazy"
	/>
</template>

<script>
export default {
	data() {
		return {
			image: "https://ik.imagekit.io/wt313diop6/avatar_5acnudJ_LO.jpeg",
			imagePlaceholder: `${this.image}?tr=w-1,h-1`, // Scale image to 1 pixel
		};
	},
};
</script>

<style lang="scss">
.base__image {
	@include margin-set($x: auto);
	@include border-radius-cut(0, 3.5rem);
	height: auto;
	max-width: 100%;
	width: 25rem;
}
</style>

<template>
	<a :href="link" :target="opensOnANewTab ? '_blank' : '_self'">
		<slot></slot>
	</a>
</template>

<script lang="ts">
export default {
	props: {
		link: {
			type: String,
			required: true,
		},
		opensOnANewTab: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="postcss" scoped>
a {
	@apply border-gray-200 border-b-2;
	&:hover {
		@apply cursor-pointer border-gray-700;
	}
}
</style>

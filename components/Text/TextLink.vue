<template>
	<a :href="to" :target="newTab ? '_blank' : '_self'">
		<slot></slot>
	</a>
</template>

<script lang="ts">
export default {
	props: {
		to: {
			type: String,
			required: true,
		},
		newTab: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="postcss">
a,
.nuxt-link {
	@apply font-normal border-gray-200 border-b-2;
}

a:hover,
.nuxt-link-active {
	@apply cursor-pointer border-gray-700;
}
</style>

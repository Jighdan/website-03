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

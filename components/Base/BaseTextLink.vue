<template>
	<a
		v-if="target"
		class="text__link"
		:href="link"
		hreflang="en"
		target="_blank"
	>
		{{ content }}
	</a>
	<a
		v-else
		:href="link"
		class="text__link"
		hreflang="en"
		target="_self"
		rel="noopener"
		>{{ content }}</a
	>
</template>

<script>
export default {
	name: "TextLink",
	props: {
		link: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			default: "",
		},
		target: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

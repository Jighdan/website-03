<template>
	<article class="card">
		<header class="card-header">
			<TextHighlight>{{ project["Name"] }}</TextHighlight>
		</header>

		<div class="card-body">
			<div class="project-meta">
				<TextItalic>{{ project["Date Finished"] }}</TextItalic>
				<TextItalic>{{ project["Technologies"].join(" + ") }}</TextItalic>
			</div>

			<div class="">
				<TextParagraph>{{ project["Description"] }}</TextParagraph>
			</div>
		</div>

		<footer class="card-footer">
			<TextLink :to="project['Repository']">Repo</TextLink>
			<TextLink v-if="project['Demo']" :to="project['Demo']">Demo</TextLink>
		</footer>
	</article>
</template>

<script lang="ts">
export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="postcss" scoped>
.card-body,
.card-footer {
	*,
	*::before,
	*::after {
		@apply text-sm font-normal;
	}
}
</style>

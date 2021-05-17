<template>
	<div class="page-wrap">
		<main>
			<TextSubTitle>Contact</TextSubTitle>

			<section>
				<TextHighlight>E-Mail</TextHighlight>
				<TextParagraph
					><TextLink to="mailto:reynsth@gmail.com"
						>reynsth@gmail.com</TextLink
					></TextParagraph
				>
			</section>

			<section>
				<TextHighlight>Social Media</TextHighlight>
				<TextParagraph
					>You could find me on
					<TextLink to="https://twitter.com/jighdan" new-tab>Twitter</TextLink>,
					<TextLink to="https://www.linkedin.com/in/jighdan/" new-tab>
						LinkedIn
					</TextLink>
					, or
					<TextLink to="https://github.com/jighdan" new-tab>GitHub</TextLink>.
				</TextParagraph>
			</section>

			<section>
				<TextHighlight>Algorithms Platforms</TextHighlight>
				<div class="section-body">
					<TextParagraph>
						I love solving problems (or attempting to), which also means to
						research on efficient ways to create solutions as new problems
						arise.
					</TextParagraph>

					<TextParagraph>
						Some of the platforms in which I have been learning and practicing
						such skills are:
						<TextLink to="https://app.codesignal.com/profile/jighdan" new-tab
							>Code Signal</TextLink
						>,
						<TextLink to="https://leetcode.com/jighdan/" new-tab
							>LeetCode</TextLink
						>,
						<TextLink to="https://binarysearch.com/@/jighdan" new-tab
							>Binary Search</TextLink
						>, and
						<TextLink to="https://www.codewars.com/users/Jighdan" new-tab
							>Code Wars</TextLink
						>.
					</TextParagraph>
				</div>
			</section>
		</main>
	</div>
</template>

<script lang="ts">
export default {
	layout: "secondary",
};
</script>

<style lang="postcss" scoped>
.page-wrap {
	main {
		@apply max-w-sm flex flex-col gap-y-5;
	}

	section {
		@apply flex flex-col gap-y-2;

		.section-body {
			@apply flex flex-col gap-y-1;
		}
	}
}
</style>

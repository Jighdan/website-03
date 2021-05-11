<template>
	<div>
		<nav>
			<NuxtLink to="/">Go Back</NuxtLink>
		</nav>

		<main>
			<TextSubTitle>Contact</TextSubTitle>
			<div>
				<div>
					<TextHighlight>Social Media</TextHighlight>
					<TextParagraph>
						You could find me on
						<TextLink to="https://www.linkedin.com/in/jighdan/" :new-tab="true"
							>LinkedIn</TextLink
						>
						or
						<TextLink to="https://twitter.com/jighdan" :new-tab="true">
							Twitter
						</TextLink>
						.
					</TextParagraph>
				</div>

				<div>
					<TextHighlight>e-Mail</TextHighlight>
					<TextLink to="mailto:reynsth@gmail.com">reynsth@gmail.com</TextLink>
				</div>
			</div>
		</main>
	</div>
</template>

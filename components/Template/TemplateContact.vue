<template>
	<a :href="link" class="svg__wrap social__link">
		<component :is="`icon-${name}`" class="social__image svg__icon" />
	</a>
</template>

<script>
import IconLinkedin from "~/assets/images/svg/linkedin.svg";
import IconGithub from "~/assets/images/svg/github.svg";
import IconWhatsapp from "~/assets/images/svg/whatsapp.svg";
import IconTwitter from "~/assets/images/svg/twitter.svg";
import IconEmail from "~/assets/images/svg/email.svg";

export default {
	components: {
		IconTwitter,
		IconLinkedin,
		IconWhatsapp,
		IconGithub,
		IconEmail,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.social__link {
	@include margin-set($y: 2vw, $x: 2vw);

	.social__image {
		height: auto;
		width: calc(50px + 2.5vw);
	}

	&:hover,
	&:active,
	&:focus {
		.social__image {
			transform: scale(1.1);
		}
	}
}
</style>

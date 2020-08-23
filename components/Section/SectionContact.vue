<template>
	<section class="section__container">
		<h2 class="section__title contact__title">Reach Out!</h2>
		<section class="contact__links">
			<a
				href="https://www.linkedin.com/in/reinny-almonte-ramos-b70312186/"
				class="social__link"
			>
				<SVGLinkedIn class="social__image svg__icon" />
			</a>
			<a href="https://github.com/Jighdan" class="social__link">
				<SVGGithub class="social__image svg__icon" />
			</a>
			<a
				href="https://api.whatsapp.com/send?phone=+18299122442"
				class="social__link"
			>
				<SVGWhatsapp class="social__image svg__icon" />
			</a>
			<a href="https://twitter.com/jighdan" class="social__link">
				<SVGTwitter class="social__image svg__icon" />
			</a>
			<a href="mailto:reynsth@gmail.com" class="social__link">
				<SVGMail class="social__image svg__icon" />
			</a>
		</section>
	</section>
</template>

<script>
import SVGLinkedIn from "@/assets/images/svg/linkedin.svg";
import SVGGithub from "@/assets/images/svg/github.svg";
import SVGWhatsapp from "@/assets/images/svg/whatsapp.svg";
import SVGTwitter from "@/assets/images/svg/twitter.svg";
import SVGMail from "@/assets/images/svg/email.svg";

export default {
	components: {
		SVGLinkedIn,
		SVGGithub,
		SVGWhatsapp,
		SVGMail,
		SVGTwitter,
	},
};
</script>

<style lang="scss">
.contact__title {
	text-align: center;
}

.contact__links {
	@include grid-layout(1rem, 5, 50px, 1fr);
	margin-top: 1.5rem;
	place-items: center;

	.social__image {
		height: auto;
		width: 60px;

		&:hover,
		&:active {
			transform: scale(1.1);
		}
	}
}
</style>

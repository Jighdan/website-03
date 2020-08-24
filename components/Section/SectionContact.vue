<template>
	<section class="section__container">
		<h2 class="section__title contact__title">Reach Out!</h2>
		<section class="contact__links">
			<a
				href="https://www.linkedin.com/in/reinny-almonte-ramos-b70312186/"
				class="svg__wrap social__link"
			>
				<SVGLinkedIn class="social__image svg__icon" />
			</a>
			<a href="https://github.com/Jighdan" class="svg__wrap social__link">
				<SVGGithub class="social__image svg__icon" />
			</a>
			<a
				href="https://api.whatsapp.com/send?phone=+18299122442"
				class="svg__wrap social__link"
			>
				<SVGWhatsapp class="social__image svg__icon" />
			</a>
			<a href="https://twitter.com/jighdan" class="svg__wrap social__link">
				<SVGTwitter class="social__image svg__icon" />
			</a>
			<a href="mailto:reynsth@gmail.com" class="svg__wrap social__link">
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
	@include flex-layout(center, center, $wrap: true);
	@include margin-set($top: 1.75rem);

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
}
</style>

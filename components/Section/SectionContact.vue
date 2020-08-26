<template>
	<section class="section__container">
		<h2 class="section__title section__contact__title">Reach Out!</h2>
		<section class="section__contact__links">
			<a
				v-for="profile in profiles"
				:key="profile.id"
				:href="profile.link"
				target="_blank"
				hreflang="en"
				class="svg__wrap section__contact__link"
			>
				<BaseIcon
					:name="profile.name.toLowerCase()"
					class="section__contact__svg svg__icon"
				/>
			</a>
		</section>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import BaseIcon from "~/components/Base/BaseIcon";

export default {
	components: {
		BaseIcon,
	},
	computed: mapGetters({
		profiles: "contacts/getProfiles",
	}),
};
</script>

<style lang="scss">
.section__contact__title {
	text-align: center;
}

.section__contact__links {
	@include flex-layout(center, center, $wrap: true);
	@include margin-set($top: 1.75rem);
}

.section__contact__link {
	@include margin-set($y: 2vw, $x: 2vw);

	.section__contact__svg {
		height: auto;
		width: calc(50px + 2.5vw);
	}

	&:hover,
	&:active,
	&:focus {
		.section__contact__svg {
			transform: scale(1.1);
		}
	}
}
</style>

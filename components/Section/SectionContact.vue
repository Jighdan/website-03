<template>
	<section class="section__container">
		<h2 class="section__title contact__title">Reach Out!</h2>
		<section class="contact__links">
			<TemplateContact
				v-for="profile in profiles"
				:key="profile.id"
				:link="profile.link"
				:name="profile.name.toLowerCase()"
			/>
		</section>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import TemplateContact from "~/components/Template/TemplateContact";

export default {
	components: {
		TemplateContact,
	},
	computed: mapGetters({
		profiles: "contacts/getProfiles",
	}),
};
</script>

<style lang="scss">
.contact__title {
	text-align: center;
}

.contact__links {
	@include flex-layout(center, center, $wrap: true);
	@include margin-set($top: 1.75rem);
}
</style>

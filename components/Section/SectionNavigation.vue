<template>
	<nav class="section__navigation">
		<BaseTextLink
			v-for="profile in headerProfiles"
			:key="profile.id"
			:link="profile.link"
			:content="profile.name"
			class="section__navigation__item"
			:target="true"
		/>
	</nav>
</template>

<script>
import { mapGetters } from "vuex";
import BaseTextLink from "~/components/Base/BaseTextLink";

export default {
	components: {
		BaseTextLink,
	},
	computed: mapGetters({
		headerProfiles: "contacts/getHeaderProfiles",
	}),
};
</script>

<style lang="scss">
.section__navigation {
	@include flex-layout(space-evenly, center, true);
	@include padding-set($y: 0.5rem, $x: 0.25rem);
	width: inherit;

	.section__navigation__item {
		@include padding-set($y: 0.1rem, $x: 0.25rem);
		font-size: 1.1em;
	}
}
</style>

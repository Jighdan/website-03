<template>
	<nav class="layout__nav">
		<BaseTextLink
			v-for="profile in headerProfiles"
			:key="profile.id"
			:link="profile.link"
			:content="profile.name"
			class="nav__item"
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
.layout__nav {
	@include flex-layout(space-evenly, center, true);
	@include padding-set($y: 0.5rem, $x: 0.25rem);
	width: inherit;

	.nav__item {
		@include padding-set($y: 0.1rem, $x: 0.25rem);
		font-size: 1.05em;
	}
}
</style>

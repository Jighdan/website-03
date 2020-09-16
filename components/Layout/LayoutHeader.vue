<template>
	<header class="layout__header">
		<nav class="layout__header__navigation">
			<BaseTextLink
				v-for="profile in headerProfiles"
				:key="profile.id"
				:link="profile.link"
				:content="profile.name"
				class="layout__header__navigation__item"
				rel="noopener noreferrer"
				:target="true"
			/>
		</nav>
	</header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: mapGetters({
		headerProfiles: "contacts/getHeaderProfiles",
	}),
};
</script>

<style lang="scss">
.layout__header {
	@include margin-set($bottom: 1rem);
	width: 100%;

	.layout__header__navigation {
		@include flex-layout(space-evenly, center, true);
		@include padding-set($y: 0.5rem, $x: 0.25rem);
		width: inherit;

		.layout__header__navigation__item {
			@include padding-set($y: 0.1rem, $x: 0.25rem);
			font-size: 1.1em;
		}
	}
}
</style>

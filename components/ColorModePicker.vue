<template>
	<ul class="color__container">
		<li v-for="color of colors" :key="color">
			<component :is="`icon-${color}`" @click="$colorMode.preference = color" />
		</li>
	</ul>
</template>

<script>
import IconLight from "@/assets/images/svg/mode-light.svg";
import IconDark from "@/assets/images/svg/mode-dark.svg";
import IconSepia from "@/assets/images/svg/mode-sepia.svg";

export default {
	components: {
		IconLight,
		IconSepia,
		IconDark,
	},
	data() {
		return {
			colors: ["light", "dark", "sepia"],
		};
	},
};
</script>

<style>
.color__container {
	display: flex;
	justify-content: flex-end;
}
</style>

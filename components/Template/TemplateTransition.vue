<template>
	<transition-group
		name="staggered-fade"
		tag="ul"
		:css="false"
		@before-enter="beforeEnter"
		@enter="enter"
		@leave="leave"
	>
		<slot></slot>
	</transition-group>
</template>

<script>
import Velocity from "velocity-animate";

export default {
	methods: {
		beforeEnter(element) {
			element.style.opacity = 0;
			element.style.height = 0;
		},
		enter(element, done) {
			const delay = element.dataset.index * 150;
			setTimeout(() => {
				Velocity(
					element,
					{ opacity: 1, height: "max-content" },
					{ complete: done }
				);
			}, delay);
		},
		leave(element, done) {
			const delay = element.dataset.index * 150;
			setTimeout(() => {
				Velocity(element, { opacity: 0, height: 0 }, { complete: done });
			}, delay);
		},
	},
};
</script>

<style></style>

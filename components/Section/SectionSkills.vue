<template>
	<section class="section__container">
		<h2 class="section__title">Skills</h2>
		<section class="section__skills__container">
			<TemplateSkill title="Languages" :list="languages" />
			<TemplateSkill title="Frameworks" :list="frameworks" />
			<TemplateSkill title="Tools" :list="tools" />
		</section>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import TemplateSkill from "~/components/Template/TemplateSkill";

export default {
	components: {
		TemplateSkill,
	},
	computed: mapGetters({
		languages: "skills/getLanguages",
		frameworks: "skills/getFrameworks",
		tools: "skills/getTools",
	}),
};
</script>

<style lang="scss">
.section__skills__container {
	@include grid-layout(1.75rem, auto-fit, 300px, 1fr);
}
</style>

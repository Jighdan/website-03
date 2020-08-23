<template>
	<section class="section__container">
		<h2 class="section__title">Skills</h2>
		<section class="skills__container">
			<TemplateSkill title="Languages" :list="languages" />
			<TemplateSkill title="Frameworks" :list="frameworks" />
			<TemplateSkill title="Tools" :list="tools" />
		</section>
	</section>
</template>

<script>
import TemplateSkill from "~/components/Template/TemplateSkill";

export default {
	components: {
		TemplateSkill,
	},
	computed: {
		languages() {
			return this.$store.state.skills.languages;
		},
		frameworks() {
			return this.$store.state.skills.frameworks;
		},
		tools() {
			return this.$store.state.skills.tools;
		},
	},
};
</script>

<style lang="scss"></style>

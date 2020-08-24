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

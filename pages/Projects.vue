<template>
	<main class="page-wrap">
		<header>
			<TextSubTitle>Projects</TextSubTitle>
			<TextParagraph>
				Here you will find a handful of my public projects ordered by the date
				of completion.
			</TextParagraph>
		</header>

		<div role="list" class="projects-list">
			<Project
				v-for="project in projects"
				:key="project['Name']"
				:project="project"
				role="listitem"
			/>
		</div>
	</main>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Airtable from "airtable";
import { FieldSet } from "airtable/lib/field_set";

export default {
	layout: "secondary",

	async asyncData({ $config }: Context) {
		const { key, base } = $config.airtable;
		const table = "Projects";
		const airtableBase = new Airtable({ apiKey: key }).base(base);
		const projects: Array<FieldSet> = [];

		await airtableBase(table)
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				const recordsFields = records.map((record) => record.fields);
				projects.push(...recordsFields);
				fetchNextPage();
			});

		return { projects };
	},
};
</script>

<style lang="postcss" scoped>
.page-wrap {
	@apply flex flex-col gap-y-8 justify-center items-center;
}

.projects-list {
	@apply max-w-sm flex flex-col gap-y-6;
}
</style>

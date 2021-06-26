import Airtable, { Records, FieldSet } from "airtable";
import TProject from "@/types/project";
import { AirtableBase } from "airtable/lib/airtable_base";

class AirtableData {
	keys: Record<string, string>;
	airtable: AirtableBase;

	constructor() {
		this.keys = {
			api: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY as string,
			base: process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY as string
		};
		this.airtable = new Airtable({ apiKey: this.keys.api }).base(this.keys.base);
	};

	private formatProjectsRecords = (records: Records<FieldSet>): Array<TProject> => {
		return records.map(record => ({
			id: record.id as TProject["id"],
			name: record.fields["Name"] as TProject["name"],
			description: record.fields["Description"] as TProject["description"],
			technologies: record.fields["Technologies"] as TProject["technologies"],
			repository: record.fields["Repository"] as TProject["repository"],
			demo: record.fields["Demo"] !== undefined ? record.fields["Demo"] as TProject["demo"] : null,
			dateFinished: record.fields["Date Finished"] as TProject["dateFinished"]
		}));
	};

	public fetchProjects = async (): Promise<Array<TProject>> => {
		const projects: Array<TProject> = [];

		await this.airtable("Projects")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				projects.push(...this.formatProjectsRecords(records));
				fetchNextPage();
			});

		return projects;
	};
};

export default AirtableData;

import Airtable, { Records, FieldSet } from "airtable";
import TProject from "@/types/project";
import TBook from "@/types/book";
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

	private formatBooksRecords = (records: Records<FieldSet>): Array<TBook> => {
		return records.map(record => ({
			id: record.id as TBook["id"],
			title: record.fields["Title"] as TBook["title"],
			author: record.fields["Author"] as TBook["author"],
			inProgress: record.fields["In Progress"] ? true : false as TBook["inProgress"],
			hasRead: record.fields["Read"] ? true : false as TBook["hasRead"],
			dateAdded: record.fields["Date Added"] as TBook["dateAdded"],
			dateFinished: record.fields["Date Finished"] !== undefined
				? record.fields["Date Finished"] as TBook["dateFinished"]
				: null
		}));
	};

	public fetchData = async (): Promise<{ projects: TProject[]; books: TBook[]; }> => {
		const projects: Array<TProject> = [];
		const books: Array<TBook> = [];

		await this.airtable("Projects")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				projects.push(...this.formatProjectsRecords(records));
				fetchNextPage();
			}
		);

		await this.airtable("Reading List")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				books.push(...this.formatBooksRecords(records));
				fetchNextPage();
			}
		);

		return { projects, books };
	};
};

export default AirtableData;

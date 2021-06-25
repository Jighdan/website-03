import { useState, useEffect } from "react";
import Airtable from "airtable";
import TProject from "@/types/project";

const useAirtable = () => {
	const [projects, setProjects] = useState<Array<TProject>>([]);

	useEffect(() => {
		const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
		const baseKey = process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY;
		const airtable = new Airtable({ apiKey }).base(baseKey as string);

		airtable("Projects")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				const formattedRecords: Array<TProject> = records.map(record => {
					return {
						id: record.id as TProject["id"],
						name: record.fields["Name"] as TProject["name"],
						description: record.fields["Description"] as TProject["description"],
						technologies: record.fields["Technologies"] as TProject["technologies"],
						repository: record.fields["Repository"] as TProject["repository"],
						demo: record.fields["Demo"] as TProject["demo"],
						dateFinished: record.fields["Date Finished"] as TProject["dateFinished"]
					};
				});

				setProjects([...projects, ...formattedRecords]);
				fetchNextPage();
			});
	}, []);

	return projects;
};

export default useAirtable;

type TBook = {
	id: string;
	title: string;
	author: Array<string>;
	inProgress: boolean;
	hasRead: boolean;
	dateAdded: string;
	dateFinished: string | null;
};

export default TBook;

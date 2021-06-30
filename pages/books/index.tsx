import AirtableData from "library/airtableData";
import { useState, useEffect } from "react";
import TBook from "@/types/book";
import LayoutSecondary from "@/layouts/secondary";
import BookList from "@/components/BooksList";
import styles from "./styles.module.scss";

type ComponentProps = {
	books: Array<TBook>;
};

const BooksPage = ({ books }: ComponentProps) => {
	const [currentlyReading, setCurrentlyReading] = useState<Array<TBook>>([]);
	const [finished, setFinished] = useState<Array<TBook>>([]);
	const [backlog, setBacklog] = useState<Array<TBook>>([]);

	const filterBooks = (books: Array<TBook>): { currentlyReading: Array<TBook>, finished: Array<TBook>, backlog: Array<TBook> } => {
		const currentlyReading: Array<TBook> = [];
		const finished: Array<TBook> = []
		const backlog: Array<TBook> = [];

		for (let book of books) {
			if (book.inProgress && !book.hasRead) {
				currentlyReading.push(book);
			} else if (book.hasRead && book.dateFinished) {
				finished.push(book);
			} else {
				backlog.push(book);
			};
		};

		return { currentlyReading, finished, backlog };
	};

	useEffect(() => {
		const filteredBooks = filterBooks(books);
		setCurrentlyReading(filteredBooks.currentlyReading);
		setFinished(filteredBooks.finished);
		setBacklog(filteredBooks.backlog);
	}, [books]);

	return (
		<LayoutSecondary>
			<div className={ styles["books-page"] }>
				<header>
					<h2>Books</h2>
					<p>Here are some of the titles that have shaped or will serve my path.</p>
				</header>

				<div className={ styles["books-page-sections"]}>
					<section>
						<h3>Currently Reading</h3>
						<BookList
							books={ currentlyReading }
						/>
					</section>

					<section>
						<h3>Finished</h3>
						<BookList
							books={ finished }
						/>
					</section>

					<section>
						<h3>Backlog</h3>
						<BookList
							books={ backlog }
						/>
					</section>
				</div>
			</div>
		</LayoutSecondary>
	)
};

export const getStaticProps = async () => {
	const airtable = new AirtableData();
	const { books } = await airtable.fetchData();

	return {
		props: { books }
	};
};

export default BooksPage;

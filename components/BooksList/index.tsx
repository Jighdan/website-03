import TBook from "@/types/book";
import BookListItem from "./BookListItem";
import styles from "./styles.module.scss";

type ComponentProps = {
	books: Array<TBook>;
};

const BookList = ({ books }: ComponentProps) => {
	const renderBooks = books.map(book => (
		<BookListItem
			key={ book.id }
			book={ book }
		/>
	));

	return (
		<ul className={ styles["book-list"] }>
			{
				books.length
					? renderBooks
					: <h4>No books on this list</h4>
			}
		</ul>
	);
};

export default BookList;

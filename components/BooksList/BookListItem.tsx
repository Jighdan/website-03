import TBook from "@/types/book";

type ComponentProps = {
	book: TBook;
};

const BookListItem = ({ book }: ComponentProps) => {
	const { title, author } = book;

	return (
		<article>
			<h4>{ title }</h4>
			<h5>{ author.join(" / ") }</h5>
		</article>
	)
};

export default BookListItem;

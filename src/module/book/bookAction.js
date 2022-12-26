import getBookService from './bookService'

const getBooksAction = () => async (dispath) => {
    try {
        dispath({ type: 'BOOKLISTPENDING' });
        const books = await getBookService();
        dispath({
            type: 'BOOKLIST',
            payload: books.data
        })
        dispath({ type: 'BOOKLISTFULFILLED' });

    } catch (error) {
        dispath({ type: 'BOOKLISTERROR' });
    }
}

export default getBooksAction;
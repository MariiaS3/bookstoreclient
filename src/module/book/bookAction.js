import getBookService from './bookService'

const getBooksAction = () => async(dispath) =>{
    try {
        const books  = await getBookService();
        dispath({
            type: 'BOOKLIST',
            payload: books.data
        })
    } catch(error){
        console.log(error)
    }
}

export default getBooksAction;
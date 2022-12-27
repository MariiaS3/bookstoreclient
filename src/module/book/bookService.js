import Axios from "axios";
import baseUrl from '../../config'

export const getBookService = () => Axios.get(`${baseUrl}/api/v1/books`)
// const getBookService = () => Axios.get(`https://book-demo1-store.herokuapp.com/api/v1/books`)
export const getBooksByTitleService = (title) => Axios.get(`${baseUrl}/api/v1/books/${title}`)

// export default getBookService;
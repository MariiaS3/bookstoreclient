import Axios from "axios";
import baseUrl from '../../config'

const getBookService = () => Axios.get(`${baseUrl}/api/v1/books`)
// const getBookService = () => Axios.get(`https://book-demo1-store.herokuapp.com/api/v1/books`)


export default getBookService;
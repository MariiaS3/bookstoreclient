import React from "react";
import Proptypes from 'prop-types';
import { Box } from "@mui/material";
import BookListItem from "./BookListItem";
import "./book.css"

const propTypes = {
    books:Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        releaseYear: Proptypes.number.isRequired
    })).isRequired,
}

const BookList = ({books}) =>{
    return (
        <Box className="bookList" ml={2}>
            {books.map((book) => 
                <BookListItem book={book} key={book.id}/>
            )}
        </Box>
    )
}

BookList.propTypes = propTypes;
export default BookList;


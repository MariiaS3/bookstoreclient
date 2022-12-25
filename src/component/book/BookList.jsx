import React from "react";
import Proptypes from 'prop-types';
import { Box } from "@mui/material";
import styled from "./BookStyles";

const propTypes = {
    books:Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        releaseYear: Proptypes.number.isRequired
    })).isRequired,
}

const BookList = ({books}) =>{
    const classes = styled();

    return (
        <Box className={classes.bookList}>
            {books.map((book) => <div key={book.id}>{book.id}</div>)}
        </Box>
    )
}

BookList.propTypes = propTypes;
export default BookList;


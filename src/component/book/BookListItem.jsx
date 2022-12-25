import React from "react";
import Proptypes from 'prop-types';
import { Avatar, Box, Paper, Typography } from "@mui/material";
import "./book.css";

const propTypes = {
    book:Proptypes.shape({
        id: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        releaseYear: Proptypes.number.isRequired
    }).isRequired,
}

const BookListItem = ({book}) =>{
    return (
        <Box mb={2}>
            <Paper elevation={2} className="bookListItemPaper">
                <Avatar style={{width: '180px', height: '200px'}} className="bookImage" variant="square" >
                    {book.title}
                </Avatar>
                <Box ml={2}>
                    <Typography variant="h5">{book.title}</Typography>
                    <Typography >{book.description}</Typography>
                    <Typography >{book.releaseYear}</Typography>
                </Box>
            </Paper>
        </Box>
    );
}

BookListItem.propTypes = propTypes;

export default BookListItem;
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./book.css"
import {getBooksByTitle} from "../../module/book/bookAction";
import { useDispatch } from "react-redux";

const BookFilter = () =>{

    const [ searchText, setSearchText ] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (event) =>{
        setSearchText(event.target.value)
    }

    const handleSearchClick = () =>{
        dispatch(getBooksByTitle(searchText))
    }
    return (
        <Box className="bookFilter">
            <Paper className="bookFilterPaper">
                <Typography>Search Book Filters</Typography>
                <Box paddingTop={3} marginBottom={2}>
                    <TextField  
                        placeholder="Enter book title" 
                        id="book-search" 
                        data-testid="book-title-input" 
                        label="Enter book title" 
                        variant="outlined" 
                        value={searchText}
                        // onChange={event => setSearchText(event.target.value)}
                        onChange={handleSearchChange}
                     />
                </Box>
                <Button onClick={handleSearchClick} variant="contained" color="primary" data-testid="book-search-button" >Search</Button>
            </Paper>
        </Box>
    )
}

export default BookFilter;
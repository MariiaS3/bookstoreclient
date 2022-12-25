
import { Box } from "@mui/material";
import React from "react";
import BookFilter from "./BookFilter";
import styled from "./BookStyles"
import { useDispatch, useSelector } from "react-redux";
import { getBooksSelector } from "../../module/book/bookSelector";
import getBooksAction from "../../module/book/bookAction";
import { useEffect } from "react";
import BookList from "./BookList";

const BookContainer = () =>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getBooksAction());
    },[dispatch])

    const books = useSelector(getBooksSelector);
    const  classes = styled();
    // console.log(books);
    return (
        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                <BookList books={books}/>
            </Box>
        </Box>
    )
}

export default BookContainer;
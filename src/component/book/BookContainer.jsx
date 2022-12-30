
import { Box, Skeleton } from "@mui/material";
import React from "react";
import BookFilter from "./BookFilter";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooksSelector, getBookPromiseSelector } from "../../module/book/bookSelector";
import { getBooksAction } from "../../module/book/bookAction";
import { useEffect } from "react";
import BookList from "./BookList";

const BookContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksAction());
    }, [dispatch])

    const books = useSelector(getBooksSelector);
    const bookPromise = useSelector(getBookPromiseSelector);

    return (
            <Box className="bookContainer">
                <BookFilter />
                <Box className="bookList" ml={2}>
                    {
                        bookPromise.isPending && (
                            <Box ml={5}>
                                <Skeleton data-testid="book-loader" variant="rect" animation="pulse" width="80%" height={200} />
                            </Box>
                        )
                    }
                    {
                        bookPromise.isErrorOcurred && <div data-testid="book-error-message"> Error message.... </div>
                    }
                    <BookList books={books} />
                </Box>
            </Box>
    )
}

export default BookContainer;
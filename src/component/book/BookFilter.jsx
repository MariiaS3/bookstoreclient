import { Box, Paper } from "@mui/material";
import React from "react";
import styled from './BookStyles';


const BookFilter = () =>{
    const classes = styled();
    return (
        <Box className={classes.bookFilter}>
            <Paper className={classes.bookFilterPaper}>
                Book filter
            </Paper>
        </Box>
    )
}

export default BookFilter;
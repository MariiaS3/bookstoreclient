// import { createStyles, makeStyles } from "@mui/styles";
import {styled } from "@mui/system"

export default styled(() => ({
    bookContainer:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row'
    },
    bookFilter:{
        width:'20%',
        height: '500px'
    },
    bookFilterPaper:{
        width: '100%',
        height:'100%'
    },
    bookList:{
        width: '80%'
    }

}));
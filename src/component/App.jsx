import React from "react";
import Axios from "axios";
import baseUrl from "../config/index";
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";

const App = () =>{

    Axios(`${baseUrl}/api/v1/books`).then(books =>{
        // console.log(books);
    });
    
    return (
    <Layout>
        {/* <div>My first component</div> */}
        <BookContainer />
    </Layout>
    );
  }

  export default App;
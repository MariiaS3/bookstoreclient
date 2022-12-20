import React from "react";
import Axios from "axios";
import baseUrl from "./config/index";


const App = () =>{

    Axios(`${baseUrl}/api/v1/books`).then(books =>{
        console.log(books);
    });

    return <div>My first component</div>
  }

  export default App;
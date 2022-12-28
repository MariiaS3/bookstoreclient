import React from "react";
// import Axios from "axios";
// import baseUrl from "../config/index";
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Login from "./user/Login";

const App = () => {

    // Axios(`${baseUrl}/api/v1/books`).then(books =>{
    //     // console.log(books);
    // });

    return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/login" element={<Login />} />
                        <Route exact path="/" element={ <BookContainer />} />
                            {/* <div>My first component</div> */}
                    </Switch>
                </Layout>
            </Router>
    );
}

export default App;
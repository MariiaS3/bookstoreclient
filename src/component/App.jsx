import React from "react";
// import Axios from "axios";
// import baseUrl from "../config/index";
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { SnackbarProvider } from "notistack";
import Login from "./user/Login";
import Auth from "./Auth";
import Register from "./user/Register";

const App = () => {

    // Axios(`${baseUrl}/api/v1/books`).then(books =>{
    //     // console.log(books);
    // });

    return (
        <SnackbarProvider maxSnack={3}>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route exact path="/" element={ <BookContainer element={<Auth />}/> } />
                        {/* <div>My first component</div> */}
                    </Switch>
                </Layout>
            </Router>
        </SnackbarProvider>
    );
}

export default App;